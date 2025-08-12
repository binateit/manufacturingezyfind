
import DownloadApp from "@/components/shared/DownloadApp";
import TenderList from "@/components/tenders/TenderList";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { initializeApollo } from "@/lib/apolloClient";
import Head from "next/head";

interface TenderPageProps {
    tenders: PostItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function TenderPage({ tenders, pagination }: TenderPageProps) {
    const title = 'Tender RFP and RFQ manufacturing & mining | www.ManufacturingEzyFind.co.za'
    const description = 'Find all your tenders & apply online for RFP, RFQ directly to manufacturing, mining, engineering & construction companies.'
    const keywords = 'Tender lists, RFQ, Request for quote, RFP, Request for proposal, Mining tenders, manufacturing tenders, engineering tenders, construction tenders.'

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
                    <TenderList
                        initialTenders={tenders}
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
    const searchPostRequest: SearchPostRequest = {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: PostCategory.Tender,
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    };

    const { data: tenderData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: searchPostRequest,
    });

    return {
        props: {
            tenders: tenderData?.getPostList?.result ?? [],
            pagination: {
                count: tenderData?.getPostList?.count ?? 0,
                currentPage: tenderData?.getPostList?.currentPage ?? 1,
                totalPages: tenderData?.getPostList?.totalPages ?? 0,
            },
        }
    };
};