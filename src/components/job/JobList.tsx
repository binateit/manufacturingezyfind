import { ENV } from "@/core/config/env";
import { faAngleDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
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

interface JobListProps {
    initialJobs: PostItem[];
    initialPagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}
export default function JobList({
    initialJobs,
    initialPagination,
}: JobListProps) {
    const [jobs, setJobs] = useState<PostItem[]>(initialJobs || []);
    const [pagination, setPagination] = useState(initialPagination);

    const [filters, setFilters] = useState<FilterState>({
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    });

    const variables: SearchPostRequest = {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: PostCategory.Jobs,
        title: filters.searchText,
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    };

    const { data, loading } = useQuery(GET_POST_LIST, {
        variables,
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        if (data?.getPostList) {
            setJobs(data.getPostList.result ?? []);
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

            {/* Right Job Listing */}
            <div className="basis-12/12 lg:basis-8/12 xl:basis-9/12 mt-5 lg:mt-0">
                {pagination && (
                    <PaginationInfo
                        currentPage={pagination.currentPage}
                        pageSize={DEFAULT_PAGE_SIZE}
                        totalCount={pagination.count}
                        label="Jobs"
                    />
                )}

                {/* Job Cards */}
                {jobs.length === 0 && (<NoRecordsCard />)}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 bg-white flex flex-col justify-between shadow-sm hover:bg-gray-50 transition-all"
                        >

                            {/* Content wrapper */}
                            <div className="flex flex-col flex-grow">

                                {/* Title - fixed height */}
                                <Link
                                    href={`/manufacturing/jobs/${job?.postID}/${slugify(job?.title || '')}.html`}
                                    className="text-md uppercase font-semibold text-primary block mb-1 overflow-hidden"
                                    style={{ minHeight: "48px" }} // about 2 lines of text
                                >
                                    {job.title}
                                </Link>

                                {/* Company Name */}
                                <div className="text-sm font-light">{job.companyName}</div>

                                {/* Description - fixed height */}
                                <div
                                    className="text-sm font-light text-gray-500 mt-2 overflow-hidden"
                                    style={{ minHeight: "60px" }} // about 3 lines of text
                                    dangerouslySetInnerHTML={{ __html: job.descriptionSEO }}
                                />
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-sm">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primary mr-1" />
                                    Posted: {formatDate(job.startDate || "")}
                                </p>
                                <Link
                                    href={`/manufacturing/jobs/${job?.postID}/${slugify(job?.title || '')}.html`}
                                    className="bg-[var(--primary-color)] text-sm text-white border border-[var(--primary-color)] uppercase px-4 py-1 hover:bg-white hover:text-[var(--primary-color)] transition-all"
                                >
                                    View Details
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>







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