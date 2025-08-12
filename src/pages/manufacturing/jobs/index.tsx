import JobList from "@/components/job/JobList";
import DownloadApp from "@/components/shared/DownloadApp";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { initializeApollo } from "@/lib/apolloClient";
import Head from "next/head";

interface JobPageProps {
    jobs: PostItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

const title = 'Manufacturing, Mining, Engineering & Construction Jobs | www.ManufacturingEzyFind.co.za'
const description = 'Find all your Manufacturing, Mining, Engineering & Construction Jobs on this portal'
const keywords = 'Manufacturing jobs, Mining jobs, Engineering jobs, Construction Jobs'

export default function JobPage({ jobs, pagination }: JobPageProps) {
    
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
                    <JobList
                        initialJobs={jobs}
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
        categoryId: PostCategory.Jobs,
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    };

    const { data: jobData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: searchPostRequest,
    });

    return {
        props: {
            jobs: jobData?.getPostList?.result ?? [],
            pagination: {
                count: jobData?.getPostList?.count ?? 0,
                currentPage: jobData?.getPostList?.currentPage ?? 1,
                totalPages: jobData?.getPostList?.totalPages ?? 0,
            },
        }
    };
};