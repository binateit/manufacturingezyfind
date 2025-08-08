import BusinessDetail from "@/components/business/BusinessDetail";
import { ENV } from "@/core/config/env";
import { GET_BUSINESS_DETAILS } from "@/core/graphql/queries/getBusinessDetail";
import { GET_BUSINESS_LIST } from "@/core/graphql/queries/getBusinessList";
import { BusinessDetails } from "@/core/models/businesses/businessDetail";
import { BusinessItem } from "@/core/models/businesses/businessList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { GetStaticProps } from "next";

interface Props {
    business: BusinessDetails | null;
}

export default function BusinessDetailPage({ business }: Props) {
    if(business === null) {
        return <div className="container my-10">Business not found</div>;
    }
    return (
        <>
            <BusinessDetail business={business} />
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
        params: { companyId: [`${business?.companyId || ''}`, `${slugify(business?.companyName) || ''}.html`] },
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

