import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductItem } from '@/core/models/products/productList';
import { productSliderSetting } from '@/core/config/productSliderSetting';
import PurchaseProduct from './PurchaseProduct';
import BidProduct from './BidProduct';
import HireProduct from './HireProduct';



interface ProductSliderProps {
  products: ProductItem[];
}

const componentMap: Record<number, React.FC<{ product: ProductItem }>> = {
  1: PurchaseProduct,
  2: BidProduct,
  3: HireProduct
};

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="slider-container h-full">
      <Slider {...productSliderSetting} className="h-full -ml-[12px] -mr-[12px] xl:-mr-[10px]">
        {products.map((product) => {
          const Component = componentMap[product.salesTypeId];
          return Component ? <Component key={product.productID} product={product} /> : null;
        })}
      </Slider>
    </div>
  );
}
