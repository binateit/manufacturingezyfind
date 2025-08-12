import BusinessDetail from "@/components/business/BusinessDetail";
import DownloadApp from "@/components/shared/DownloadApp";
import { ENV } from "@/core/config/env";
import { GET_BUSINESS_DETAILS } from "@/core/graphql/queries/getBusinessDetail";
import { GET_BUSINESS_LIST } from "@/core/graphql/queries/getBusinessList";
import { BusinessDetails } from "@/core/models/businesses/businessDetail";
import { BusinessItem } from "@/core/models/businesses/businessList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { toSeoSlug } from "@/lib/utils";
import { GetStaticProps } from "next";
import Head from "next/head";

interface Props {
    business: BusinessDetails | null;
}

export default function BusinessDetailPage({ business }: Props) {
    if (business === null) {
        return <div className="container my-10">Business not found</div>;
    }
    
    const title = `${business?.companyName ? `${business.companyName} - ` : ''}${business?.compProvinceName ? `${business.compProvinceName} ` : ''}manufacturing companies ${business?.compCityName ? `${business.compCityName} / ` : ''}${business?.suburbName ? `${business.suburbName} ` : ''}South Africa`
    const description = `${business?.compCategory || ''} ${business?.compDescription ?
        `${business.compDescription.slice(0, 100).replace(/<[^>]*>?/gm, '').trim().substring(0,
            business.compDescription.slice(0, 100).replace(/<[^>]*>?/gm, '').lastIndexOf(' '))}...` : ''} 
            manufacturing companies in South Africa. Find a South African manufacturing company near me.`;
    const keywords = `${business?.companyName ? `${business.companyName} - ` : ''}${business?.compProvinceName ? `${business.compProvinceName} ` : ''}manufacturing companies ${business?.compCityName ? `${business.compCityName} / ` : ''}${business?.suburbName ? `${business.suburbName} ` : ''}South Africa`
    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/business/${business?.companyID}/${toSeoSlug(business?.companyName || '')}`;

    return (
        <>
        <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonicalUrl} />

        </Head>
            <BusinessDetail business={business} />
            <DownloadApp />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_BUSINESS_LIST,
        variables: {
            statusIds: '1',
            companyName: '',
            categoryIds: String(ENV.CATEGORY_ID),
            provinceIds: '',
            cityIds: '',
            suburbIds: '',
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_BUSINESS_LIST,
        variables: {
            statusIds: '1',
            companyName: '',
            categoryIds: String(ENV.CATEGORY_ID),
            provinceIds: '',
            cityIds: '',
            suburbIds: '',
            page: 1,
            size: tempData.getBusinessList.count
        }
    });

    const paths = finalData.getBusinessList?.result?.map((business: BusinessItem) => ({
        params: { companyId: [`${business?.companyId || ''}`, `${slugify(business?.companyName) || ''}`] },
    })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { companyId } = params as { companyId: string[] };
    const numericId = parseInt(companyId?.[0] || '0');

    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
        query: GET_BUSINESS_DETAILS,
        variables: {
            companyId: numericId,
            statusIds: "1",
            categoryIds: `${ENV.CATEGORY_ID}`
        },
    });

    return {
        props: {
            business: data?.getBusinessList?.result?.[0] || null,
        },
    };
};

