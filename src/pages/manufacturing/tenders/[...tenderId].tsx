
import TenderDetail from "@/components/tenders/TenderDetail";
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
    tender: PostDetail | null;
}

export default function TenderDetailPage({ tender }: Props) {
    if (tender === null) {
        return <div className="container my-10">Tender not found</div>;
    }
    return (
        <>
            <TenderDetail tender={tender} />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Tender,
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Tender,
            page: 1,
            size: tempData.getPostList.count
        }
    });

    const paths =
        finalData.getPostList?.result?.map((tender: PostItem) => ({
            params: {
                tenderId: [
                    `${tender.postID}`,
                    slugify(tender.title),
                ],
            },
        })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { tenderId } = params as { tenderId: string[] };
    const numericId = parseInt(tenderId?.[0] || '0');

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
            tender: data?.getPostList?.result?.[0] || null,
        },
    };
};

