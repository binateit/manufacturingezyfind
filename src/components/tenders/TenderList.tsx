import { ENV } from "@/core/config/env";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { Pagination } from "../shared/Pagination";
import Loading from "../shared/Loading";
import { SearchPostRequest } from "@/core/models/posts/postRequest";
import { PostCategory } from "@/core/constants/enum";
import { PostItem } from "@/core/models/posts/postList";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { formatDate } from "@/lib/format";
import { PaginationInfo } from "../shared/PaginationInfo";
import { NoRecordsCard } from "../ui/NoRecordsCard";

type FilterState = {
    searchText?: string;
    page: number;
    size?: number;
};

interface TenderListProps {
    initialTenders: PostItem[];
    initialPagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}
export default function TenderList({
    initialTenders,
    initialPagination,
}: TenderListProps) {
    const [tenders, setTenders] = useState<PostItem[]>(initialTenders || []);
    const [pagination, setPagination] = useState(initialPagination);

    const [filters, setFilters] = useState<FilterState>({
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    });

    const variables: SearchPostRequest = {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: PostCategory.Tender,
        title: filters.searchText,
        page: filters.page,
        size: filters.size || DEFAULT_PAGE_SIZE,
    };

    const { data, loading } = useQuery(GET_POST_LIST, {
        variables,
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        if (data?.getPostList) {
            setTenders(data.getPostList.result ?? []);
            setPagination({
                count: data.getPostList.count ?? 0,
                currentPage: data.getPostList.currentPage ?? 1,
                totalPages: data.getPostList.totalPages ?? 0,
            });
        }
    }, [data]);

    if (loading) return <Loading />;

    const handleSearch = (value: string) => {
        setFilters((prev) => ({
            ...prev,
            searchText: value,
            page: 1,
        }));
    };

    const handlePageChange = (newPage: number) => {
        setFilters((prev) => ({
            ...prev,
            page: newPage,
        }));
    };

    return (
        <div className="flex flex-wrap lg:gap-6 lg:flex-nowrap my-10">

            {/* Left Filter Panel */}
            <div className="basis-12/12 lg:basis-4/12 xl:basis-3/12">
                <div className="py-3 px-5 text-white bg-secondary flex justify-between items-center">
                    <p className="text-lg">Filter Option</p>
                </div>
                <div className="border border-gray-300">
                    {/* Search */}
                    <div className="border-b border-gray-300">
                        <div className="bg-white px-4 py-3 flex justify-between items-center cursor-pointer">
                            <p className="text-md font-semibold">Search By Text</p>
                            <FontAwesomeIcon icon={faAngleDown} className="text-lg" />
                        </div>
                        <div className="bg-gray-50 px-4 py-5">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const input = e.currentTarget.elements.namedItem("search") as HTMLInputElement;
                                    handleSearch(input.value);
                                }}
                            >
                                <div className="relative">
                                    <input
                                        type="search"
                                        name="search"
                                        placeholder="Enter Title"
                                        defaultValue={filters.searchText}
                                        className="form-control border border-gray-300 text-sm w-full h-10 px-5"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-[50%] translate-y-[-50%] right-0 h-10 px-4 bg-primary text-white"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Tender Listing */}
            <div className="basis-12/12 lg:basis-8/12 xl:basis-9/12 mt-5 lg:mt-0">
                {pagination && (
                    <PaginationInfo
                        currentPage={pagination.currentPage}
                        pageSize={DEFAULT_PAGE_SIZE}
                        totalCount={pagination.count}
                        label="Tenders"
                    />
                )}

                {/* Tender Cards */}
                {tenders.length === 0 && (<NoRecordsCard />)}
                {tenders.map((tender, index) => (
                    <div
                        className="relative block mt-5 mb-10 card-shadow"
                        key={`${tender.postID}-${index}`}
                    >
                        <div className="border border-gray-300 p-4 mb-4 sm:flex justify-between transition-all duration-300 cursor-pointer hover:bg-gray-50 relative bg-white">

                            <div className="basis-12/12 sm:basis-8/12">
                                <Link
                                    href={`/manufacturing/tenders/${tender?.postID}/${slugify(tender?.title ?? '')}`}
                                    className="text-md font-semibold"
                                >
                                    {tender.title}
                                </Link>
                                {tender.descriptionSEO ? (
                                    <div
                                        className="text-sm font-light text-gray-500 mb-4"
                                        dangerouslySetInnerHTML={{ __html: tender.descriptionSEO }}
                                    />
                                ) : (
                                    <p className="text-gray-600">No description available</p>
                                )}
                            </div>


                            <div className="basis-12/12 sm:basis-4/12 max-[640px]:border-t border-gray-300 mt-2 pt-2 relative sm:text-right">
                                <div className="w-[100px] text-center uppercase absolute max-[451px]:-right-5 left-[282px] -top-10">
                                    <div className="bg-primary text-white py-1 px-2 z-9 relative date-box after:w-0 after:h-0 after:border-tl-[40px] after:border-bl-[40px] after:border-[#861622] after:rotate-90 after:top-[51px] after:right-0">
                                        <span className="text-[12px] font-semibold">
                                            {formatDate(tender.startDate || "")}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href={`/manufacturing/tenders/${tender?.postID}/${slugify(tender?.title ?? '')}`}
                                    className="mt-2 inline-block text-[10px] sm:text-[12px] bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-3 sm:px-10 py-1"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}





                {/* Pagination */}
                <div className="flex flex-col md:flex-row mt-10 justify-center">
                    {pagination && (
                        <Pagination
                            currentPage={pagination.currentPage}
                            totalPages={pagination.totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}