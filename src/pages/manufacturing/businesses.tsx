import BusinessList from '@/components/business/BusinessList';
import Loading from '@/components/shared/Loading';
import { ENV } from '@/core/config/env';
import { GET_BUSINESS_LIST } from '@/core/graphql/queries/getBusinessList';
import { BusinessItem } from '@/core/models/business/businessList';
import { BusinessRequest } from '@/core/models/business/businessRequest';
import { initializeApollo } from '@/lib/apolloClient';
import { getString } from '@/lib/stringUtils';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
    businesses: BusinessItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function BusinessesPage({ businesses, pagination }: Props) {
    const router = useRouter();
    const { query, isReady } = router;

    if (!isReady) return <Loading />; // prevent undefined query on first render

    const searchParams = {
    category: getString(query.category),
    province: getString(query.province),
    city: getString(query.city),
    suburb: getString(query.suburb),
    text: getString(query.text),
    page: query.page ? parseInt(query.page as string, 10) : 1,
};

    return (
        <>
            <div className="my-10">
                <div className="container">
                    <BusinessList
                        searchParams={searchParams}
                        initialBusinesses={businesses}
                        initialPagination={pagination}
                    />
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const apolloClient = initializeApollo();
    const businessRequest: BusinessRequest = {
        statusIds: '1',
        categoryIds: String(ENV.CATEGORY_ID),
        provinceIds: '',
        cityIds: '',
        suburbIds: '',
        companyName: '',
        page: 1,
        size: 12,
    };


    const { data: businessData } = await apolloClient.query({
        query: GET_BUSINESS_LIST,
        variables: businessRequest,
    });

    return {
        props: {
            businesses: businessData?.getBusinessList?.result ?? [],
            pagination: {
                count: businessData?.getBusinessList?.count ?? 0,
                currentPage: businessData?.getBusinessList?.currentPage ?? 1,
                totalPages: businessData?.getBusinessList?.totalPages ?? 0,
            },
        }
    };
};
