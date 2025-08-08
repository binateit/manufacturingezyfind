import ProductDetail from "@/components/product/productDetail";
import { ENV } from "@/core/config/env";
import { GET_PRODUCT_DETAILS } from "@/core/graphql/queries/getProductDetail";
import { GET_PRODUCTS } from "@/core/graphql/queries/getProductList";
import { ProductDetails } from "@/core/models/products/productDetail";
import { ProductItem } from "@/core/models/products/productList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { GetStaticProps } from "next";

interface Props {
    product: ProductDetails | null;
}

export default function ProductDetailPage({ product }: Props) {
    if(product === null) {
        return <div className="container my-10">Product not found</div>;
    }
    return (
        <>
            <ProductDetail product={product} />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_PRODUCTS,
        variables: {
            domainCategoryIds: String(ENV.CATEGORY_ID),
            scopeId: null,
            salesTypeId: null,
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_PRODUCTS,
        variables: {
            domainCategoryIds: String(ENV.CATEGORY_ID),
            scopeId: null,
            salesTypeId: null,
            page: 1,
            size: tempData.getPrdProductList.count
        }
    });

    const paths =
        finalData.getPrdProductList?.result?.map((product: ProductItem) => ({
            params: {
                productId: [
                    `${product.productID}`,
                    slugify(product.productName),
                ],
            },
        })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { productId } = params as { productId: string[] };
    const numericId = parseInt(productId?.[0] || '0');

    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
        query: GET_PRODUCT_DETAILS,
        variables: {
            productId: numericId
        },
    });

    return {
        props: {
            product: data?.getPrdProductList?.result?.[0] || null,
        },
    };
};

