import ProductDetail from "@/components/product/productDetail";
import { ENV } from "@/core/config/env";
import { GET_PRODUCT_DETAILS } from "@/core/graphql/queries/getProductDetail";
import { GET_PRODUCTS } from "@/core/graphql/queries/getProductList";
import { ProductDetails } from "@/core/models/products/productDetail";
import { ProductItem } from "@/core/models/products/productList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { toSeoSlug } from "@/lib/utils";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { cartService } from "@/core/services/cartService";
import { tokenService } from "@/core/services/token.service";
import { toast } from "react-toastify";

interface Props {
    product: ProductDetails | null;
}

export default function ProductDetailPage({ product }: Props) {
    const [qty, setQty] = useState(1);
    const [fromDate, setFromDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    if (product === null) {
        return <div className="container my-10">Product not found</div>;
    }
    const title = product.productName.length > 50
        ? `${product.productName.slice(0, 50).trim().substring(0, product.productName.slice(0, 50).lastIndexOf(' '))}`
        : `${product.productName} | www.ManufacturingEzyFind.co.za`;

    const description = product.description?.length > 100
        ? `${product.description.slice(0, 100).replace(/<[^>]*>?/gm, '').trim().substring(0, product.description.slice(0, 100).replace(/<[^>]*>?/gm, '').lastIndexOf(' '))}...`
        : 'Manufacturing Products for sale in South Africa';

    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/product/${product.productID}/${toSeoSlug(product.productName || '')}.html`;


    const handleAddToCart = async () => {
        try {
            const sessionId = tokenService.getUserName() ? undefined : tokenService.getToken() || undefined;
            if (product.salesTypeId === 1) {
                const res = await cartService.addToCart({
                    productId: product.productID,
                    quantity: qty,
                    sessionId,
                    optimistic: { productName: product.productName || '', productImage: product.productImage || '', unitCost: product.unitCost || 0 },
                });
                if (res.success) {
                    toast.success('Added to cart');
                } else {
                    toast.error(res.message || 'Failed to add');
                }
            } else if (product.salesTypeId === 3) {
                if (!fromDate || !endDate) {
                    toast.error('Please select start and end date');
                    return;
                }
                const res = await cartService.addToCart({
                    productId: product.productID,
                    quantity: qty,
                    sessionId,
                    fromDate: new Date(fromDate).toISOString(),
                    endDate: new Date(endDate).toISOString(),
                    optimistic: { productName: product.productName || '', productImage: product.productImage || '', unitCost: product.unitCost || 0 },
                });
                if (res.success) {
                    toast.success('Added to cart');
                } else {
                    toast.error(res.message || 'Failed to add');
                }
            }
        } catch {
            toast.error('Failed to add to cart');
        }
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
                {product?.googleSchema ? (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: product.googleSchema
                                .replace(`<script type=\"application/ld+json\">\r\n{`, '')
                                .replace(`}\r\n</script>`, '')
                        }}
                    />
                ) : null}
            </Head>
            <ProductDetail
                product={product}
                quantity={qty}
                onIncreaseQuantity={() => setQty((q) => q + 1)}
                onDecreaseQuantity={() => setQty((q) => Math.max(1, q - 1))}
                hireFromDate={fromDate}
                hireEndDate={endDate}
                onChangeHireFromDate={setFromDate}
                onChangeHireEndDate={setEndDate}
                onAddToCartClick={handleAddToCart}
            />

            {/* controls integrated in ProductDetail above */}
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

