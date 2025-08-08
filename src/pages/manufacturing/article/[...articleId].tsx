import ArticleDetail from "@/components/article/ArticleDetail";
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
    article: PostDetail | null;
}

export default function ArticleDetailPage({ article }: Props) {
    if (article === null) {
        return <div className="container my-10">Article not found</div>;
    }
    return (
        <>
            <ArticleDetail article={article} />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Blog,
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: {
            domainId: Number(ENV.CATEGORY_ID),
            categoryId: PostCategory.Blog,
            page: 1,
            size: tempData.getPostList.count
        }
    });

    const paths =
        finalData.getPostList?.result?.map((article: PostItem) => ({
            params: {
                articleId: [
                    `${article.postID}`,
                    slugify(article.title),
                ],
            },
        })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articleId } = params as { articleId: string[] };
    const numericId = parseInt(articleId?.[0] || '0');
    
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
            article: data?.getPostList?.result?.[0] || null,
        },
    };
};

