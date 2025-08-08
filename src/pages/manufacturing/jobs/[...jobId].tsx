
import JobDetail from "@/components/job/JobDetail";
import { ENV } from "@/core/config/env";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_DETAILS } from "@/core/graphql/queries/getPostDetail";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostDetail } from "@/core/models/posts/postDetail";
import { PostItem } from "@/core/models/posts/postList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { GetStaticProps } from "next";

interface Props {
    job: PostDetail | null;
}

export default function JobDetailPage({ job }: Props) {
    if (job === null) {
        return <div className="container my-10">Job not found</div>;
    }
    return (
        <>
            <JobDetail job={job} />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Jobs,
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Jobs,
            page: 1,
            size: tempData.getPostList.count
        }
    });

    const paths =
        finalData.getPostList?.result?.map((job: PostItem) => ({
            params: {
                jobId: [
                    `${job.postID}`,
                    slugify(job.title),
                ],
            },
        })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { jobId } = params as { jobId: string[] };
    const numericId = parseInt(jobId?.[0] || '0');

    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
        query: GET_POST_DETAILS,
        variables: {
            postId: numericId,
            page: 1,
            size: 1
        },
    });

    return {
        props: {
            job: data?.getPostList?.result?.[0] || null,
        },
    };
};

