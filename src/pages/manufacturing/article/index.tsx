
import ArticleList from "@/components/article/ArticleList";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { initializeApollo } from "@/lib/apolloClient";
import Head from "next/head";

interface ArticlePageProps {
    articles: PostItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function ArticlePage({ articles, pagination }: ArticlePageProps) {

    const title = 'ManufacturingEzyFind | Article'
    const description = 'Manufacturing articles covering all sectors of the manufacturing industy.';
    const keywords = 'manufacturing articles,metal,textiles,manufacturing businesses in south africa,chemicals,mining,oil and gas,automotive,agriculture,ICT and Electronics'
    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/article`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
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