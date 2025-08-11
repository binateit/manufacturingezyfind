import Loading from "@/components/shared/Loading";
import { ENV } from "@/core/config/env";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/core/constants";
import { PostCategory } from "@/core/constants/enum";
import { GET_POST_LIST } from "@/core/graphql/queries/getPostList";
import { PostItem } from "@/core/models/posts/postList";
import { SearchPostRequest } from "@/core/models/posts/postRequest";

import { formatDate } from "@/lib/format";
import { slugify } from "@/lib/slugify";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export interface TenderCardProps {
    companyId: number;
    companyName: string; // Optional, in case you want to display the company name
}

export default function TenderCard({ companyId, companyName }: TenderCardProps) {

    const variables: SearchPostRequest = {
        domainId: Number(ENV.CATEGORY_ID),
        categoryId: PostCategory.Tender,
        page: DEFAULT_PAGE,
        size: DEFAULT_PAGE_SIZE,
        companyId: companyId
    };

    const { data, loading } = useQuery(GET_POST_LIST, {
        variables,
        fetchPolicy: "network-only",
    });

    if (loading) return <Loading />;

    const tender = data?.getPostList?.result ?? [];
    const count = tender?.length ?? 0;

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
                    E-Flyers / E-Catalogue by By {companyName}
                </p>
            </div>
            <Slider {...sliderSetting}>
                {tender.map((product: PostItem, index: number) => {

                    return (
                        <div
                            className="relative block mt-5 mb-10 card-shadow"
                            key={`${tender.categoryID}-${index}`}
                        >
                            <div className="border border-gray-300 p-4 mb-4 sm:flex justify-between transition-all duration-300 cursor-pointer hover:bg-gray-50 relative bg-white">

                                <div className="basis-12/12 sm:basis-8/12">
                                    <Link
                                        href={`/manufacturing/tenders/${tender?.postID}/${slugify(tender?.title || '')}.html`}
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
                                        href={`/manufacturing/tenders/${tender?.postID}/${slugify(tender?.title || '')}.html`}
                                        className="mt-2 inline-block text-[10px] sm:text-[12px] bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-3 sm:px-10 py-1"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
