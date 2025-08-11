
import ArticleList from "@/components/article/ArticleList";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { initializeApollo } from "@/lib/apolloClient";

interface ArticlePageProps {
    articles: PostItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function ArticlePage({ articles, pagination }: ArticlePageProps) {
    
    return (
        <>
            <div className="my-10">
                <div className="container">
                    <ArticleList
                        initialArticles={articles}
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
        categoryId: PostCategory.Blog,
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    };

    const { data: articleData } = await apolloClient.query({
        query: GET_POST_LIST,
        variables: searchPostRequest,
    });

    return {
        props: {
            articles: articleData?.getPostList?.result ?? [],
            pagination: {
                count: articleData?.getPostList?.count ?? 0,
                currentPage: articleData?.getPostList?.currentPage ?? 1,
                totalPages: articleData?.getPostList?.totalPages ?? 0,
            },
        }
    };
};