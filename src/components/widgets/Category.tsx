import { ENV } from "@/core/config/env";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";
import { Category } from "@/core/models/categories/category";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import slugify from "slugify";

export default function CategoryWidget() {

    const { data: categoryData } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    const categories = categoryData?.getMstCategoryByParentId?.result ?? [];

    return (
        <>
            <p className="text-primary text-center uppercase text-2xl font-semibold mt-15 mb-15 relative after:absolute after:w-[420px] after:h-[26px] after:-bottom-8 after:content-[url('/images/hedding_marker.png')] after:left-[50%] after:translate-x-[-50%]">
                Categories
            </p>
            <ul className='list-disc text-primary w-full xl:w-5xl mx-auto flex flex-wrap mb-15 pl-10'>
                {categories.map((category: Category, index: number) => (
                    <li className='text-2xl basis-12/12 sm:basis-6/12 md:basis-4/12 lg:basis-3/12' key={index}>
                        <Link
                            href={`/manufacturing/businesses?category=${slugify(category.categoryName)}`}
                            className='text-black text-[15px]'>{category?.categoryName}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}