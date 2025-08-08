import { ENV } from "@/core/config/env";
import { Category } from "@/core/models/categories/category";
import { GlobalFilter } from "@/core/models/filters/globalfilter";
import { City } from "@/core/models/locations/city";
import { Province } from "@/core/models/locations/province";
import { Suburb } from "@/core/models/locations/suburb";
import { SelectOptionNumber, SelectOptionString } from "@/core/models/shared/selectOption";
import { dropdownStyle } from "@/styles/primereact/header-dropdown";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { Dispatch, FC, SetStateAction, useEffect, useMemo } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_CITY_BY_PROVINCE } from "@/core/graphql/queries/getCitiesByProvince";
import { GET_SUBURB_BY_CITY } from "@/core/graphql/queries/getSuburbsByCity";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";

const Dropdown = dynamic(() =>
  import("primereact/dropdown").then((mod) => mod.Dropdown), {
  ssr: false,
  loading: () => <div className="w-full h-10 bg-gray-100 animate-pulse rounded" />,
});


interface SearchProps {
    globalFilter: GlobalFilter;
    setGlobalFilter: Dispatch<SetStateAction<GlobalFilter>>;
}

const Search: FC<SearchProps> = ({ globalFilter, setGlobalFilter }) => {

    const { data: categoryData, loading: categoryLoading } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    const { data: provinceData, loading: provinceLoading } = useQuery(GET_PROVINCE);
    const [getCitiesByProvince, { data: cityData, loading: cityLoading }] = useLazyQuery(GET_CITY_BY_PROVINCE);
    const [getSuburbsByCity, { data: suburbData, loading: suburbLoading }] = useLazyQuery(GET_SUBURB_BY_CITY);

    const categories = categoryData?.getMstCategoryByParentId?.result ?? []
    const provinces = provinceData?.getProvince?.result ?? [];
    const cities = cityData?.getCityByProvince?.result ?? [];
    const suburbs = suburbData?.getSuburbByCity?.result ?? [];

    const categoryOptions: SelectOptionString[] = useMemo(() => (
        categories?.map((cat: Category) => ({
            value: cat.categoryName,
            label: cat.categoryName,
        })) || []
    ), [categoryData]);

    const provinceOptions: SelectOptionNumber[] = useMemo(() =>
        provinces.map((p: Province) => ({
            value: Number(p.provinceId),
            label: p.provinceName
        })), [provinces]);

    const cityOptions: SelectOptionNumber[] = useMemo(() =>
        cities.map((c: City) => ({
            value: Number(c.cityId),
            label: c.cityName
        })), [cities]);

    const suburbOptions: SelectOptionNumber[] = useMemo(() =>
        suburbs.map((s: Suburb) => ({
            value: Number(s.suburbId),
            label: s.suburbName
        })), [suburbs]);

    useEffect(() => {
        if (globalFilter.provinceId) {
            getCitiesByProvince({ variables: { id: globalFilter.provinceId } });
        }
    }, [globalFilter.provinceId]);

    useEffect(() => {
        if (globalFilter.cityId) {
            getSuburbsByCity({ variables: { id: globalFilter.cityId } });
        }
    }, [globalFilter.cityId]);


    return (
        <div className={`bg-white p-2 card-shadow absolute left-0 w-full text-sm`}>

            <div className='border-b border-gray-300 pb-2'>
                <div className='flex gap-2 items-center mb-2'>
                    <FontAwesomeIcon icon={faFilter} className=' text-[12px]' />

                    <span className='text-[12px]'>Filter by Location</span>
                </div>
                <div className='flex flex-col min-[450px]:flex-row gap-2'>

                    <Dropdown
                        loading={provinceLoading}
                        value={globalFilter.provinceId}
                        options={provinceOptions}
                        optionLabel="label"
                        placeholder="Provinces"
                        filter
                        className="flex justify-between text-[12px] border border-gray-300"
                        onChange={(e) => {
                            const selected = provinces.find((p: Province) => Number(p.provinceId) === e.value);
                            setGlobalFilter((prev) => ({
                                ...prev,
                                provinceId: Number(selected?.provinceId),
                                provinceName: selected?.provinceName,
                                cityId: undefined,
                                cityName: undefined,
                                suburbId: undefined,
                                suburbName: undefined
                            }));
                        }}
                        pt={dropdownStyle}
                    />

                    <Dropdown
                        value={globalFilter.cityId}
                        loading={cityLoading}
                        options={cityOptions}
                        optionLabel="label"
                        placeholder="City"
                        filter
                        className="flex justify-between text-[12px] border border-gray-300"
                        onChange={(e) => {
                            const selected = cities.find((c: City) => c.cityId === e.value);
                            setGlobalFilter((prev) => ({
                                ...prev,
                                cityId: Number(selected?.cityId),
                                cityName: selected?.cityName,
                                suburbId: undefined,
                                suburbName: undefined
                            }));
                        }}
                        pt={dropdownStyle}
                    />
                    <Dropdown
                        loading={suburbLoading}
                        value={globalFilter.suburbId}
                        options={suburbOptions}
                        optionLabel="label"
                        placeholder="Suburb"
                        filter
                        className="flex justify-between text-[12px] border border-gray-300"
                        onChange={(e) => {
                            const selected = suburbs.find((s: Suburb) => s.suburbId === e.value);
                            setGlobalFilter((prev) => ({
                                ...prev,
                                suburbId: Number(selected?.suburbId),
                                suburbName: selected?.suburbName
                            }));
                        }}
                        pt={dropdownStyle}
                    />
                </div>
            </div>
            <div className='mt-2'>
                <div className='flex gap-2 items-center mb-2'>
                    <FontAwesomeIcon icon={faFilter} className=' text-[12px]' />

                    <span className='text-[12px]'>Filter by Category</span>
                </div>

                <div className='mb-2 w-full basis-1 px-1'>
                    <div className='relative'>
                        <Dropdown
                            loading={categoryLoading}
                            value={globalFilter.categoryName}
                            options={categoryOptions}
                            optionLabel="label"
                            placeholder="All Categories"
                            filter
                            className="flex justify-between text-[12px] border border-gray-300"
                            onChange={(e) =>
                                setGlobalFilter((prev) => ({ ...prev, categoryName: e.value }))
                            }
                            pt={dropdownStyle}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search