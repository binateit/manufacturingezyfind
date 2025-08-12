
import JobDetail from "@/components/job/JobDetail";
import DownloadApp from "@/components/shared/DownloadApp";
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
    job: PostDetail | null;
}

export default function JobDetailPage({ job }: Props) {
    if (job === null) {
        return <div className="container my-10">Job not found</div>;
    }

    const title = job?.titleSEO + ' | www.ManufacturingEzyFind.co.za' || 'ManufacturingEzyFind | Jobs'
    const description = job?.descriptionSEO || 'Manufacturing jobs covering all sectors of the manufacturing industy.';
    const keywords = job?.keywordsSEO || 'manufacturing articles,metal,textiles,manufacturing businesses in south africa,chemicals,mining,oil and gas,automotive,agriculture,ICT and Electronics'
    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/article/${job?.postID}/${toSeoSlug(job?.title || '')}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonicalUrl} />
                {job?.googleSchema && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: job.googleSchema
                                    .replace(`<script type=\"application/ld+json\">\r\n{`, '')
                                    .replace(`}\r\n</script>`, '')
                            }}
                        />
                )}
            </Head>
            <JobDetail job={job} />
            <DownloadApp />
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

