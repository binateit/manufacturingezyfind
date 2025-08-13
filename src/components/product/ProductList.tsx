import { ENV } from "@/core/config/env";
import { slugify } from "@/lib/slugify";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FilterSection } from "../ui/FilterSection";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";
import { useQuery } from "@apollo/client";
import { DEFAULT_PAGE_SIZE, SALES_TYPES, SalesType, Scope, SCOPES } from "@/core/constants";
import { Pagination } from "../shared/Pagination";
import { Category } from "@/core/models/categories/category";
import Loading from "../shared/Loading";
import { ProductItem } from "@/core/models/products/productList";
import { SearchProductRequest } from "@/core/models/products/productRequest";
import { GET_PRODUCTS } from "@/core/graphql/queries/getProductList";
import { formatDate } from "@/lib/format";
import PurchaseProduct from "./PurchaseProduct";
import BidProduct from "./BidProduct";
import HireProduct from "./HireProduct";
import { PaginationInfo } from "../shared/PaginationInfo";
import { NoRecordsCard } from "../ui/NoRecordsCard";


type FilterState = {
    searchText?: string;
    category?: number[];
    scope?: number;
    saleType?: number;
    page: number;
    size?: number;
};

interface ProductListProps {
    searchParams: {
        category?: string;
        scope?: string;
        saleType?: string;
        text?: string;
        page?: number;
    },
    initialProducts: ProductItem[];
    initialPagination: {
        count: number;
        currentPage: number;
        totalPages: number;
    };
}
export default function ProductList({
    searchParams,
    initialProducts,
    initialPagination,
}: ProductListProps) {
    const [products, setProducts] = useState<ProductItem[]>(initialProducts || []);
    const [pagination, setPagination] = useState(initialPagination);

    const [filters, setFilters] = useState<FilterState>({
        searchText: searchParams.text || "",
        page: searchParams.page ?? 1,
        size: DEFAULT_PAGE_SIZE,
    });

    const { data: categoryRes } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    const categories = categoryRes?.getMstCategoryByParentId?.result ?? [];

    const getSelectedCategoryNames = (
        selected: number[] | number | undefined,
        allCategories: Category[]
    ): string[] => {
        if (selected === undefined) return [];

        const selectedIds = Array.isArray(selected) ? selected : [selected];

        return allCategories
            .filter((cat) => selectedIds.includes(cat.categoryId))
            .map((cat) => cat.categoryName);
    };
    
    const selectedCategoryNames = getSelectedCategoryNames(filters.category, categories);

    const categoryLabel: string = selectedCategoryNames.length > 0
        ? `${selectedCategoryNames.join(", ")} Products`
        : "Products";

    const variables: SearchProductRequest = {
        domainCategoryIds: filters.category?.join(",") || String(ENV.CATEGORY_ID),
        salesTypeId: filters.saleType || null,
        scopeId: filters.scope || null,
        page: filters.page,
        size: filters.size ?? DEFAULT_PAGE_SIZE,
    };

    const { data, loading, refetch } = useQuery(GET_PRODUCTS, {
        variables,
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        // Only run if data is available
        if (categories.length) {
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

            if (searchParams.scope) {
                const matchedScope: Scope | undefined = SCOPES.find((s: Scope) =>
                    slugify(s.scopeName) === slugify(searchParams.scope!)
                );
                if (matchedScope) {
                    newFilters.scope = Number(matchedScope.scopeId);
                }
            }

            if (searchParams.saleType) {
                const matchedSaleType: SalesType | undefined = SALES_TYPES.find((s: SalesType) =>
                    slugify(s.saleTypeName) === slugify(searchParams.saleType!)
                );
                if (matchedSaleType) {
                    newFilters.saleType = Number(matchedSaleType.saleTypeId);
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
    }, [searchParams, categories]);

    useEffect(() => {
        if (data?.getPrdProductList) {
            setProducts(data.getPrdProductList.result ?? []);
            setPagination({
                count: data.getPrdProductList.count ?? 0,
                currentPage: data.getPrdProductList.currentPage ?? 1,
                totalPages: data.getPrdProductList.totalPages ?? 0,
            });
        }
    }, [data]);

    if (loading) return <Loading />;

    const handleFilterChange = (field: keyof FilterState, value: number[] | number) => {

        setFilters((prev) => ({
            ...prev,
            [field]: value,
            page: 1,
        }));
    };

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
        <>
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
                                <p className="text-md font-semibold">Search Product</p>
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
                                            placeholder="Enter Product name"
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
                            title="Scope"
                            data={SCOPES}
                            selected={filters.scope ? [filters.scope] : []}
                            onChange={(values) => handleFilterChange("scope", values[0])}
                            labelKey="scopeName"
                            valueKey="scopeId"
                            mode="single"
                        />
                        <FilterSection
                            title="Sales Type"
                            data={SALES_TYPES}
                            selected={filters.saleType ? [filters.saleType] : []}
                            onChange={(values) => handleFilterChange("saleType", values[0])}
                            labelKey="saleTypeName"
                            valueKey="saleTypeId"
                            mode="single"
                        />
                    </div>
                </div>

                {/* Right Business Listing */}
                <div className="basis-12/12 lg:basis-8/12 xl:basis-9/12 mt-5 lg:mt-0">

                    {pagination && (
                        <PaginationInfo
                            currentPage={pagination.currentPage}
                            pageSize={DEFAULT_PAGE_SIZE}
                            totalCount={pagination.count}
                            label={categoryLabel}
                        />
                    )}

                    {/* Product Cards */}
                    {products.length === 0 && (<NoRecordsCard />)}
                    <div className="flex flex-wrap gap-y-5 -mx-[12px]">
                        {products.map((product, index) => (
                            <div className="basis-12/12 min-[550px]:basis-6/12 xl:basis-4/12 px-[12px] h-full" key={index}>
                                <div className="flex flex-col h-full relative">
                                    {/* date box */}
                                    <div className="w-[100px] text-center uppercase absolute max-[451px]:-right-5 -right-4 top-10 z-10">
                                        <div className="bg-primary text-white py-1 px-2 relative">
                                            <span className="text-[12px] font-semibold">
                                                {formatDate(product.endDate || "")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Type */}
                                    {product.salesTypeId === 1 && <PurchaseProduct product={product} />}
                                    {product.salesTypeId === 2 && <BidProduct product={product} refetchOnSuccess={refetch} />}
                                    {product.salesTypeId === 3 && <HireProduct product={product} />}
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
        </>
    );
}