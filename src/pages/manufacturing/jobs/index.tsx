import JobList from "@/components/job/JobList";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { initializeApollo } from "@/lib/apolloClient";

interface JobPageProps {
    jobs: PostItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function JobPage({ jobs, pagination }: JobPageProps) {
    
    return (
        <>
            <div className="my-10">
                <div className="container">
                    <JobList
                        initialJobs={jobs}
                        initialPagination={pagination}
                    />
                </div>
            </div>
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