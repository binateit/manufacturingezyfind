import MagazineList from "@/components/magazines/MagazineList";
import { GET_MAGAZINES_LIST } from "@/core/graphql/queries/getMagazineList";
import { MagazineItem } from "@/core/models/magazines/magazineList";
import { SearchMagazineRequest } from "@/core/models/magazines/magazineRequest";
import { initializeApollo } from "@/lib/apolloClient";

interface MagazinePageProps {
    magazines: MagazineItem[];
    pagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}

export default function MagazinePage({ magazines, pagination }: MagazinePageProps) {
    return (
        <>
            <div className="my-10">
                <div className="container">
                    <MagazineList
                        initialMagazines={magazines}
                        initialPagination={pagination}
                    />
                </div>
            </div>
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