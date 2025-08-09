import ArticleDetail from "@/components/article/ArticleDetail";
import { ENV } from "@/core/config/env";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_DETAILS } from "@/core/graphql/queries/getPostDetail";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostDetail } from "@/core/models/posts/postDetail";
import { PostItem } from "@/core/models/posts/postList";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { toSeoSlug } from "@/lib/utils";
import { GetStaticProps } from "next";
import Head from "next/head";

interface Props {
    article: PostDetail | null;
}

export default function ArticleDetailPage({ article }: Props) {
    if (article === null) {
        return <div className="container my-10">Article not found</div>;
    }
    const title = article?.titleSEO + ' | www.ManufacturingEzyFind.co.za' || 'ManufacturingEzyFind | Article'
    const description = article?.descriptionSEO || 'Manufacturing articles covering all sectors of the manufacturing industy.';
    const keywords = article?.keywordsSEO || 'manufacturing articles,metal,textiles,manufacturing businesses in south africa,chemicals,mining,oil and gas,automotive,agriculture,ICT and Electronics'
    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/article/${article?.postID}/${toSeoSlug(article?.title || '')}.html`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="canonical" href={canonicalUrl} />

                {article?.googleSchema && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: article.googleSchema
                                    .replace(`<script type=\"application/ld+json\">\r\n{`, '')
                                    .replace(`}\r\n</script>`, '')
                            }}
                        />
                )}
            </Head>
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

