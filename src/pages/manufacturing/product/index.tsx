import ProductList from "@/components/product/ProductList";
import DownloadApp from "@/components/shared/DownloadApp";
import Loading from "@/components/shared/Loading";
import { ENV } from "@/core/config/env";
import { GET_PRODUCTS } from "@/core/graphql/queries/getProductList";
import { ProductItem } from "@/core/models/products/productList";
import { SearchProductRequest } from "@/core/models/products/productRequest";
import { initializeApollo } from "@/lib/apolloClient";
import { getString } from "@/lib/stringUtils";
import Head from "next/head";
import { useRouter } from "next/router";

interface ProductPageProps {
    products: ProductItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function ProductPage({ products, pagination }: ProductPageProps) {
    const router = useRouter();
    const { query, isReady } = router;

    if (!isReady) return <Loading />; // prevent undefined query on first render

    const searchParams = {
        category: getString(query.category),
        scope: getString(query.scope),
        saleType: getString(query.saleType),
        text: getString(query.text),
        page: query.page ? parseInt(query.page as string, 10) : 1,
    };

    const title = 'Purchase, Bid & Hire all your Manufacturing & Mining Products and Services here | www.ManufacturingEzyFind.co.za'
    const description = 'Purchase, Bid & Hire all your Manufacturing, Engineering, Mining & Construction Products and Services here on www.ManufacturingEzyFind.co.za'
    const keywords = 'Purchase products, Bid products, Auction products, Hire services, manufacturing products, engineering products, mining products, construction products'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <div className="my-10">
                <div className="container">
                    <ProductList
                        searchParams={searchParams}
                        initialProducts={products}
                        initialPagination={pagination}
                    />
                </div>
            </div>
            <DownloadApp />
        </>
    );
}


export const getStaticProps = async () => {
    const apolloClient = initializeApollo();
    const searchProductRequest: SearchProductRequest = {
        domainCategoryIds: String(ENV.CATEGORY_ID),
        page: 1,
        size: 12,
        salesTypeId: null,
        scopeId: null
    };

    const { data: productData } = await apolloClient.query({
        query: GET_PRODUCTS,
        variables: searchProductRequest,
    });

    return {
        props: {
            products: productData?.getPrdProductList?.result ?? [],
            pagination: {
                count: productData?.getPrdProductList?.count ?? 0,
                currentPage: productData?.getPrdProductList?.currentPage ?? 1,
                totalPages: productData?.getPrdProductList?.totalPages ?? 0,
            },
        }
    };
};