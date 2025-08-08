import { MagazineItem } from "@/core/models/magazines/magazineList";
import { useEffect, useState } from "react";
import { FilterSection } from "../ui/FilterSection";
import { SearchMagazineRequest } from "@/core/models/magazines/magazineRequest";
import { GET_CITIES } from "@/core/graphql/queries/getCities";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_SUBURB } from "@/core/graphql/queries/getSuburbs";
import { City } from "@/core/models/locations/city";
import { Suburb } from "@/core/models/locations/suburb";
import { useQuery } from "@apollo/client";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { Pagination } from "../shared/Pagination";
import Loading from "../shared/Loading";
import { MagazineItemCard } from "./partials/MagazineItemCard";
import { GET_MAGAZINES_LIST } from "@/core/graphql/queries/getMagazineList";
import { PaginationInfo } from "../shared/PaginationInfo";
import { NoRecordsCard } from "../ui/NoRecordsCard";

type FilterState = {
    province?: number[];
    city?: number[];
    suburb?: number[];
    page: number;
    size?: number;
};

interface MagazineListProps {
    initialMagazines: MagazineItem[];
    initialPagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}
export default function MagazineList({
    initialMagazines,
    initialPagination,
}: MagazineListProps) {
    const [magazines, setMagazines] = useState<MagazineItem[]>(initialMagazines || []);
    const [pagination, setPagination] = useState(initialPagination);

    const [filters, setFilters] = useState<FilterState>({
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
    });

    const { data: provinceRes } = useQuery(GET_PROVINCE);
    const { data: cityRes } = useQuery(GET_CITIES);
    const { data: suburbRes } = useQuery(GET_SUBURB);

    const provinces = provinceRes?.getProvince?.result ?? [];
    const cities = cityRes?.getCity?.result ?? [];
    const suburbs = suburbRes?.getSuburb?.result ?? [];

    const filteredCities = cities.filter((city: City) =>
        filters.province?.includes(city.provinceId)
    );

    const filteredSuburbs = suburbs.filter((suburb: Suburb) =>
        filters.city?.includes(suburb.cityId)
    );

    const variables: SearchMagazineRequest = {
        statusIds: "2",
        provinceIds: filters.province?.join(",") || '',
        cityIds: filters.city?.join(",") || '',
        suburbIds: filters.suburb?.join(",") || '',
        page: filters.page,
        size: filters.size ?? DEFAULT_PAGE_SIZE,
    };

    const { data, loading } = useQuery(GET_MAGAZINES_LIST, {
        variables,
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        if (data?.getMagazineList) {
            setMagazines(data.getMagazinesList.result ?? []);
            setPagination({
                count: data.getMagazinesList.count ?? 0,
                currentPage: data.getMagazinesList.currentPage ?? 1,
                totalPages: data.getMagazinesList.totalPages ?? 0,
            });
        }
    }, [data]);

    if (loading) return <Loading />;

    const handleFilterChange = (field: keyof FilterState, value: number[]) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
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

            {/* Right Magazine Listing */}
            <div className="basis-12/12 lg:basis-8/12 xl:basis-9/12 mt-5 lg:mt-0">
                {pagination && (
                    <PaginationInfo
                        currentPage={pagination.currentPage}
                        pageSize={DEFAULT_PAGE_SIZE}
                        totalCount={pagination.count}
                        label="Digital Catalogues"
                    />
                )}

                {/* Magazine Cards */}
                {magazines.length === 0 && (<NoRecordsCard />)}
                <div className="flex flex-wrap gap-y-5 -mx-[12px]">
                    {magazines.map((magazine, index) => (
                        <MagazineItemCard key={`${magazine.eflyerId}-${index}`} magazine={magazine} />
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