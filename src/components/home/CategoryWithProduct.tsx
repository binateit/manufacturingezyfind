import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_CATEGORY_BY_PARENTID } from '@/core/graphql/queries/getCategories';
import { ENV } from '@/core/config/env';
import { Category } from '@/core/models/category/category';
import { GET_PRODUCTS_BY_CATEGORY } from '@/core/graphql/queries/getProductsByCategory';
import { Product } from '@/core/models/products/Product.model';
import { ProductsByCategoryResponse } from '@/core/models/products/ProductByCategory.model';
import ProductSlider from '../product/ProductSlider';



const bgColors = ['#1D5CA7', '#A46000', '#00897B', '#789262', '#9B111E'];
const fallbackImages = [
  '/images/home-product-slider/single-product-slider-image-1.webp',
  '/images/home-product-slider/single-product-slider-image-2.webp',
  '/images/home-product-slider/single-product-slider-image-3.webp',
  '/images/home-product-slider/single-product-slider-image-4.webp'
];


export default function CategoryWithProduct() {
  const client = useApolloClient();
  const [categoryProducts, setCategoryProducts] = useState<Record<string, Product[]>>({});

  const { loading: categoryLoading, data: categoryData } = useQuery(GET_CATEGORY_BY_PARENTID, {
    variables: { id: Number(ENV.CATEGORY_ID), size: 20 }
  });

  const categories: Category[] = useMemo(
    () => categoryData?.getMstCategoryByParentId?.result || [],
    [categoryData]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          categories.map(category =>
            client.query<ProductsByCategoryResponse>({
              query: GET_PRODUCTS_BY_CATEGORY,
              variables: {
                domainCategoryIds: String(category.categoryId),
                page: 1,
                size: 5
              }
            })
          )
        );

        const newCategoryProducts: Record<string, Product[]> = {};
        responses.forEach((res, idx) => {
          const categoryId = String(categories[idx].categoryId);
          newCategoryProducts[categoryId] = res.data.getPrdProductList?.result || [];
        });

        setCategoryProducts(newCategoryProducts);
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };

    if (categories.length > 0) {
      fetchProducts();
    }
  }, [categories, client]);

  if (categoryLoading) return <div>Loading...</div>;

  return (
    <>
      {categories.map((category, index) => {
        const products = categoryProducts[String(category.categoryId)] || [];
        if (products.length === 0) return null;

        const colorIndex = index % bgColors.length;
        const bgColor = bgColors[colorIndex];
        const imageSrc = fallbackImages[colorIndex % fallbackImages.length];

        return (
          <div className="flex flex-col md:flex-row gap-[24px] pb-[24px] px-[15px]" key={index}>
            <div className="basis-full md:basis-6/12 lg:basis-4/12 xl:basis-3/12 2xl:basis-4/12">
              <div className="category-box overflow-hidden relative h-full">
                <Image
                  src={imageSrc}
                  width={606}
                  height={432}
                  className="w-full max-h-[411px] object-cover"
                  alt={category.categoryName}
                />
                <div className="p-8 absolute bottom-0 w-full">
                  <div
                    className="absolute h-[200px] -left-10 sm:-top-20 -bottom-28 w-full rotate-3 scale-[1.3] z-0"
                    style={{ backgroundColor: bgColor }}
                  ></div>
                  <h3 className="text-2xl text-white relative z-10 sm:bottom-5">
                    {category.categoryName}
                  </h3>
                </div>
              </div>
            </div>
            <div className="basis-full md:basis-6/12 lg:basis-8/12 xl:basis-9/12 2xl:basis-8/12 overflow-hidden shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)]">
              <ProductSlider products={products} />
            </div>
          </div>
        );
      })}
    </>
  );
}
