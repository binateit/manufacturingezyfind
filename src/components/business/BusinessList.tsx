import { ENV } from "@/core/config/env";
import { BusinessItem } from "@/core/models/businesses/businessList";
import { slugify } from "@/lib/slugify";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FilterSection } from "../ui/FilterSection";
import { SearchBusinessRequest } from "@/core/models/businesses/businessRequest";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";
import { GET_CITIES } from "@/core/graphql/queries/getCities";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_SUBURB } from "@/core/graphql/queries/getSuburbs";
import { City } from "@/core/models/locations/city";
import { Suburb } from "@/core/models/locations/suburb";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_BUSINESS_LIST } from "@/core/graphql/queries/getBusinessList";
import { DEFAULT_PAGE_SIZE } from "@/core/constants";
import { BusinessItemCard } from "./partials/BusinessItemCard";
import { Pagination } from "../shared/Pagination";
import BusinessMapListing from "./BusinessMapListing";
import { Province } from "@/core/models/locations/province";
import { Category } from "@/core/models/categories/category";
import Loading from "../shared/Loading";
import { PaginationInfo } from "../shared/PaginationInfo";
import { NoRecordsCard } from "../ui/NoRecordsCard";
import Head from "next/head";

type FilterState = {
    searchText?: string;
    category?: number[];
    province?: number[];
    city?: number[];
    suburb?: number[];
    page: number;
    size?: number;
};

interface BusinessListProps {
    searchParams: {
        category?: string;
        province?: string;
        city?: string;
        suburb?: string;
        text?: string;
        page?: number;
    },
    initialBusinesses: BusinessItem[];
    initialPagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}
export default function BusinessList({
    searchParams,
    initialBusinesses,
    initialPagination,
}: BusinessListProps) {
    const [businesses, setBusinesses] = useState<BusinessItem[]>(initialBusinesses || []);
    const [pagination, setPagination] = useState(initialPagination);

    const [filters, setFilters] = useState<FilterState>({
        searchText: searchParams.text || "",
        page: searchParams.page ?? 1,
        size: DEFAULT_PAGE_SIZE,
    });

    const { data: provinceRes } = useQuery(GET_PROVINCE);
    const { data: cityRes } = useQuery(GET_CITIES);
    const { data: suburbRes } = useQuery(GET_SUBURB);
    const { data: categoryRes } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    const provinces = provinceRes?.getProvince?.result ?? [];
    const cities = cityRes?.getCity?.result ?? [];
    const suburbs = suburbRes?.getSuburb?.result ?? [];
    const categories = categoryRes?.getMstCategoryByParentId?.result ?? [];

    const filteredCities = cities.filter((city: City) =>
        filters.province?.includes(city.provinceId)
    );

    const filteredSuburbs = suburbs.filter((suburb: Suburb) =>
        filters.city?.includes(suburb.cityId)
    );

    const buildVariables = (state: FilterState): SearchBusinessRequest => ({
        statusIds: "1",
        companyName: state.searchText,
        categoryIds: state.category?.join(",") || String(ENV.CATEGORY_ID),
        provinceIds: state.province?.join(",") || '',
        cityIds: state.city?.join(",") || '',
        suburbIds: state.suburb?.join(",") || '',
        page: state.page,
        size: state.size ?? DEFAULT_PAGE_SIZE,
    });

    const [fetchBusinessList, { data, loading }] = useLazyQuery(GET_BUSINESS_LIST, {
        fetchPolicy: "network-only",
    });


    useEffect(() => {
        // Only run if data is available
        if (provinces.length && cities.length && suburbs.length && categories.length) {
            const newFilters: Partial<FilterState> = {
                ...filters,
            };

            if (searchParams.category) {
                const matchedCategory: Category = categories.find((c: Category) =>
                    slugify(c.categoryName) === slugify(searchParams.category!)
                );
                if (matchedCategory) {
                    newFilters.category = [Number(matchedCategory.categoryId)];
                }
            }

            if (searchParams.province) {
                const matchedProvince: Province = provinces.find((p: Province) =>
                    slugify(p.provinceName) === slugify(searchParams.province!)
                );
                if (matchedProvince) {
                    newFilters.province = [Number(matchedProvince.provinceId)];
                }
            }

            if (searchParams.city) {
                const matchedCity: City = cities.find((c: City) =>
                    slugify(c.cityName) === slugify(searchParams.city!)
                );
                if (matchedCity) {
                    newFilters.city = [matchedCity.cityId];
                }
            }

            if (searchParams.suburb) {
                const matchedSuburb: Suburb = suburbs.find((s: Suburb) =>
                    slugify(s.suburbName) === slugify(searchParams.suburb!)
                );
                if (matchedSuburb) {
                    newFilters.suburb = [matchedSuburb.suburbId];
                }
            }

            // Set updated filters and page
            setFilters({
                ...newFilters,
                page: searchParams.page ?? 1,
                searchText: searchParams.text || "",
                size: DEFAULT_PAGE_SIZE,
            });
        }
    }, [provinces, cities, suburbs, categories, searchParams]);

    useEffect(() => {
        if (data?.getBusinessList) {
            setBusinesses(data.getBusinessList.result ?? []);
            setPagination({
                count: data.getBusinessList.count ?? 0,
                currentPage: data.getBusinessList.currentPage ?? 1,
                totalPages: data.getBusinessList.totalPages ?? 0,
            });
        }
    }, [data]);

    if (loading) return <Loading />;

    const handleFilterChange = (field: keyof FilterState, value: number[]) => {
        setFilters((prev) => {
            const next: FilterState = {
                ...prev,
                [field]: value,
                page: 1,
            };
            fetchBusinessList({ variables: buildVariables(next) });
            return next;
        });
    };

    const handleSearch = (value: string) => {
        setFilters((prev) => {
            const next: FilterState = {
                ...prev,
                searchText: value,
                page: 1,
            };
            fetchBusinessList({ variables: buildVariables(next) });
            return next;
        });
    };

    const handlePageChange = (newPage: number) => {
        setFilters((prev) => {
            const next: FilterState = {
                ...prev,
                page: newPage,
            }
            fetchBusinessList({ variables: buildVariables(next) });
            return next;
        });
    };

    const businessCount = pagination.count;

    // Generate comma-separated strings for selected filters
    const selectedCategories = filters.category ? categories.filter((c: Category) => filters.category!.includes(c.categoryId)).map((c: Category) => c.categoryName).join(", ") : "";
    const selectedProvinces = filters.province ? provinces.filter((p: Province) => filters.province!.includes(Number(p.provinceId))).map((p: Province) => p.provinceName).join(", ") : "";
    const selectedCities = filters.city ? cities.filter((c: City) => filters.city!.includes(c.cityId)).map((c: City) => c.cityName).join(", ") : "";
    const selectedSuburbs = filters.suburb ? suburbs.filter((s: Suburb) => filters.suburb!.includes(s.suburbId)).map((s: Suburb) => s.suburbName).join(", ") : "";

    let finalLocation = "South Africa";

    if (filters.suburb != undefined && filters.suburb?.length > 0) {
        finalLocation = selectedSuburbs;
    } else if (filters.city != undefined && filters.city?.length > 0) {
        finalLocation = selectedCities;
    } else if (filters.province != undefined && filters.province?.length > 0) {
        finalLocation = selectedProvinces;
    }
    const countText = businessCount > 0 ? `${businessCount} ` : "";
    const titleCategoryText = filters.category ? selectedCategories : "Manufacturing";
    const descCategoryText = filters.category ? selectedCategories : "Manufacturing";
    const website = "www.ManufacturingEzyFind.co.za";

    // Dynamically generate the title and description
    const title = `Top ${countText} ${titleCategoryText} companies in ${finalLocation} | ${website}`;
    const description = `Top ${countText} ${titleCategoryText} companies in ${finalLocation} - Find phone numbers, address, opening hours, reviews & products or services of the top manufacturing Companies ${descCategoryText}`;
    const keywords = `${countText} ${titleCategoryText} companies in ${finalLocation},manufacturing businesses ${selectedCategories},manufacturing directory,manufacturing listings,phone numbers, address, opening hours, reviews,manufacturing products, manufacturing services,mining businesses`;
    const canonicalUrl = `${ENV.DOMAIN_URL}/manufacturing/businesses`;



    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
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
                                <p className="text-md font-semibold">Search Company Name</p>
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
                                            placeholder="Enter Company name"
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

                        {/* Filters */}
                        <FilterSection
                            title="Categories"
                            data={categories}
                            selected={filters.category}
                            onChange={(values) => handleFilterChange("category", values)}
                            labelKey="categoryName"
                            valueKey="categoryId"
                        />
                        <FilterSection
                            title="Provinces"
                            data={provinces}
                            selected={filters.province}
                            onChange={(values) => {
                                handleFilterChange("province", values)
                                handleFilterChange("city", [])
                                handleFilterChange("suburb", [])
                            }}
                            labelKey="provinceName"
                            valueKey="provinceId"
                        />
                        {filters.province && filters.province?.length > 0 && (
                            <FilterSection
                                title="Cities"
                                data={filteredCities}
                                selected={filters.city}
                                onChange={(values) => {
                                    handleFilterChange("city", values)
                                    handleFilterChange("suburb", [])
                                }}
                                labelKey="cityName"
                                valueKey="cityId"
                            />
                        )}
                        {filters.city && filters.city?.length > 0 && (
                            <FilterSection
                                title="Suburbs"
                                data={filteredSuburbs}
                                selected={filters.suburb}
                                onChange={(values) => handleFilterChange("suburb", values)}
                                labelKey="suburbName"
                                valueKey="suburbId"
                            />
                        )}
                    </div>
                </div>

                {/* Right Business Listing */}
                <div className="basis-12/12 lg:basis-8/12 xl:basis-9/12 mt-5 lg:mt-0">
                    {pagination && (
                        <PaginationInfo
                            currentPage={pagination.currentPage}
                            pageSize={DEFAULT_PAGE_SIZE}
                            totalCount={pagination.count}
                            label={`${titleCategoryText} Businesses in ${finalLocation}`}
                        />
                    )}

                    {/* Business Cards */}
                    {businesses.length === 0 && (<NoRecordsCard />)}
                    <div className="flex flex-wrap gap-y-5 -mx-[12px]">
                        {businesses.map((business, index) => (
                            <BusinessItemCard key={`${business.companyId}-${index}`} business={business} />
                        ))}
                    </div>

                    {/* Map & Pagination */}
                    <BusinessMapListing businesses={businesses} />


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
        </>

    );
}