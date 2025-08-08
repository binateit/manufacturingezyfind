import MagazineDetail from "@/components/magazines/MagazineDetail";
import PageBanner from "@/components/ui/PageBanner";
import { GET_MAGAZINES_DETAILS } from "@/core/graphql/queries/getMagazineDetail";
import { GET_MAGAZINES_LIST } from "@/core/graphql/queries/getMagazineList";
import { MagazineDetails } from "@/core/models/magazines/magazineDetail";
import { MagazineItem } from "@/core/models/magazines/magazineList";

import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { GetStaticProps } from "next";

interface Props {
    magazine: MagazineDetails | null;
}

export default function MagazineDetailPage({ magazine }: Props) {
    if (magazine === null) {
        return <div className="container my-10">Magazine not found</div>;
    }
    return (
        <>
            <PageBanner title={magazine.magazineName || 'Digital Catalogue'} backgroundImage='/images/manufacturing.webp' />
            <MagazineDetail magazine={magazine} />
        </>
    );
}

export async function getStaticPaths() {
    const apolloClient = initializeApollo();
    const { data: tempData } = await apolloClient.query({
        query: GET_MAGAZINES_LIST,
        variables: {
            statusIds: "2",
            page: 1,
            size: 1
        }
    });

    const { data: finalData } = await apolloClient.query({
        query: GET_MAGAZINES_LIST,
        variables: {
            statusIds: '2',
            page: 1,
            size: tempData.getMagazinesList.count
        }
    });

    const paths = finalData.getMagazinesList?.result?.map((magazine: MagazineItem) => ({
        params: { eflyerId: [`${magazine?.eflyerId || ''}`, `${slugify(magazine?.magazineName) || ''}`] },
    })) || [];


    return {
        paths,
        fallback: false, // instead of false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { eflyerId } = params as { eflyerId: string[] };
    const numericId = eflyerId?.[0] || '0';

    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
        query: GET_MAGAZINES_DETAILS,
        variables: {
            eflyerId: numericId,
        },
    });

    return {
        props: {
            magazine: data?.getMagazinesList?.result?.[0] || null,
        },
    };
};

