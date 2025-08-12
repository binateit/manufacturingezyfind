import MagazineList from "@/components/magazines/MagazineList";
import DownloadApp from "@/components/shared/DownloadApp";
import { GET_MAGAZINES_LIST } from "@/core/graphql/queries/getMagazineList";
import { MagazineItem } from "@/core/models/magazines/magazineList";
import { SearchMagazineRequest } from "@/core/models/magazines/magazineRequest";
import { initializeApollo } from "@/lib/apolloClient";
import Head from "next/head";

interface MagazinePageProps {
    magazines: MagazineItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

const title = 'Find all manufacturing, mining and engineering business catalogues | www.ManufacturingEzyFind.co.za'
const description = 'Find all manufacturing, mining and engineering business, products and services catalogues online. All on www.ManufacturingEzyFind.co.za'
const keywords = 'business catalogue, product catalogue, service catalogue, digital catalogue, manufacturing catalogue, mining catalogue, engineering catalogue, construction catalogue'


export default function MagazinePage({ magazines, pagination }: MagazinePageProps) {
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
                    <MagazineList
                        initialMagazines={magazines}
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
    const searchMagazineRequest: SearchMagazineRequest = {
        statusIds: "2",
        page: 1,
        size: 12,

    };

    const { data: magazineData } = await apolloClient.query({
        query: GET_MAGAZINES_LIST,
        variables: searchMagazineRequest,
    });

    return {
        props: {
            magazines: magazineData?.getMagazinesList?.result ?? [],
            pagination: {
                count: magazineData?.getMagazinesList?.count ?? 0,
                currentPage: magazineData?.getMagazinesList?.currentPage ?? 1,
                totalPages: magazineData?.getMagazinesList?.totalPages ?? 0,
            },
        }
    };
};