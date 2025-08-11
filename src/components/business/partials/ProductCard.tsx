import BidProduct from "@/components/product/BidProduct";
import HireProduct from "@/components/product/HireProduct";
import PurchaseProduct from "@/components/product/PurchaseProduct";
import Loading from "@/components/shared/Loading";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE_SIZE } from "@/core/constants";
import { GET_PRODUCTS } from "@/core/graphql/queries/getProductList";
import { ProductItem } from "@/core/models/products/productList";
import { SearchProductRequest } from "@/core/models/products/productRequest";
import { formatDate, formatCurrency } from "@/lib/format";
import { useQuery } from "@apollo/client";
import Slider, { Settings } from "react-slick";

export interface ProductCardProps {
    companyId: number;
    companyName: string; // Optional, in case you want to display the company name
}

export default function ProductCard({ companyId, companyName }: ProductCardProps) {
    const variables: SearchProductRequest = {
        domainCategoryIds: String(ENV.CATEGORY_ID),
        scopeId: null,
        salesTypeId: null,
        page: 1,
        size: DEFAULT_PAGE_SIZE,
        companyId: companyId,
    };

    const { data, loading } = useQuery(GET_PRODUCTS, {
        variables,
        fetchPolicy: "network-only",
    });

    if (loading) return <Loading />;

    const products = data?.getPrdProductList?.result ?? [];
    const count = products.length ?? 0;

    if (count == 0) return null;

    const sliderSetting: Settings = {
        dots: false,
        infinite: count > 3,
        // lazyLoad: "progressive",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [

            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: count > 3,
                    dots: true
                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: count > 3,
                    dots: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: count > 3,
                    dots: true
                }
            }
        ]
    };


    return (
        <div>
            <div className='sm:flex items-center justify-between mt-10 sm:mt-6 '>
                <p className='text-primary text-center sm:text-left uppercase text-xl sm:text-2xl font-semibold mb-2 sm:mb-5 sm:w-[80%]'>
                    Products By {companyName}
                </p>
            </div>
            <Slider {...sliderSetting}>
                {products.map((product: ProductItem, index: number) => {

                    return (
                        <div
                            className="basis-12/12 min-[550px]:basis-6/12 xl:basis-4/12 px-[12px]"
                            key={`${product.productID}-${index}`}
                        >
                            <div className="relative px-3 py-3 product-box bg-white w-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] h-full flex flex-col">
                                <div className="w-[100px] text-center uppercase absolute max-[451px]:-right-5 -right-4 top-10">
                                    <div className="bg-primary text-white py-1 px-2 z-9 relative date-box after:w-0 after:h-0 after:border-tl-[40px] after:border-bl-[40px] after:border-[#861622] after:rotate-90 after:top-[51px] after:right-0">
                                        <span className="text-[12px] font-semibold">
                                            {formatDate(product.endDate || "")}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden mb-4">

                                </div>
                                <div className="">
                                    <div className="flex justify-between items-center mt-auto gap-2">
                                        {product.salesTypeId == 1 && <PurchaseProduct product={product} />}

                                        {product.salesTypeId === 2 && <BidProduct product={product} />}

                                        {product.salesTypeId == 3 && <HireProduct product={product} />}

                                        {!product.salesTypeId && (
                                            <div className="text-center flex-1">
                                                <p className="text-md">
                                                    {formatCurrency(product?.unitCost ? product.unitCost : 0.0)}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
