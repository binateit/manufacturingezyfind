import Loading from "@/components/shared/Loading";
import { ENV } from "@/core/config/env";
import { GET_MAGAZINES_LIST } from "@/core/graphql/queries/getMagazineList";
import { MagazineItem } from "@/core/models/magazines/magazineList";
import { SearchMagazineRequest } from "@/core/models/magazines/magazineRequest";
import { formatDate } from "@/lib/format";
import { slugify } from "@/lib/slugify";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

export interface MagazineCardProps {
    title: string;
    companyId?: number;
    categoryId?: number;
}

export default function MagazineCard({ title, companyId, categoryId }: MagazineCardProps) {

    const variables: SearchMagazineRequest = {
        statusIds: "1",
        page: 1,
        size: 12,
        companyIds: companyId ? String(companyId) : undefined,
        categoryIds: String(categoryId || ENV.CATEGORY_ID)
    };

    const { data, loading } = useQuery(GET_MAGAZINES_LIST, {
        variables,
        fetchPolicy: "network-only",
    });

    if (loading) return <Loading />;

    const magazine = data?.getMagazinesList?.result ?? [];
    const count = magazine.length ?? 0;

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
                    {title}
                </p>
            </div>
            <Slider {...sliderSetting}>
                {magazine.map((product: MagazineItem, index: number) => {

                    return (
                        <div
                            className="basis-12/12 min-[550px]:basis-6/12 xl:basis-4/12 px-[12px]"
                            key={`${magazine.eflyerId}-${index}`}
                        >
                            <div className="relative px-3 py-3 product-box bg-white w-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] h-full flex flex-col">
                                <div className="w-[100px] text-center uppercase absolute max-[451px]:-right-5 -right-4 top-10">
                                    <div className="bg-primary text-white py-1 px-2 z-9 relative date-box after:w-0 after:h-0 after:border-tl-[40px] after:border-bl-[40px] after:border-[#861622] after:rotate-90 after:top-[51px] after:right-0">
                                        <span className="text-[12px] font-semibold">
                                            {formatDate(magazine.startDate || "")}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden mb-4">
                                    <div className="aspect-2/1">
                                        <Image
                                            src={magazine.mapEflyersUploadDtos?.[0]?.filePath
                                                ? `${ENV.IMAGE_URL}${magazine.mapEflyersUploadDtos[0].filePath}`
                                                : "/images/no-image.webp"}
                                            fill
                                            loading="lazy"
                                            className="w-full h-full object-contain"
                                            alt={magazine.magazineName ?? "Magazine Image"}
                                        />
                                    </div>
                                </div>

                                <Link
                                    href={`/manufacturing/digital/${magazine?.eflyerId}/${slugify(magazine?.magazineName ?? '')}`}
                                    className="uppercase text-primary font-semibold mb-1"
                                >
                                    {magazine.magazineName}
                                </Link>
                                <p className="text-sm text-black font-medium mb-2">Category: {magazine.categoryName}</p>
                                <p className="text-sm font-light text-gray-500 mb-4">
                                    {magazine.eFlyerDescription?.substring(0, 100)}
                                </p>

                                <div className="flex justify-between mt-auto">
                                    <Link
                                        href={`/manufacturing/digital/${magazine?.eflyerId}/${slugify(magazine?.magazineName ?? '')}`}
                                        className="btn bg-[var(--primary-color)] hover:bg-white border border-[var(--primary-color)] text-sm flex items-center gap-1 text-white hover:text-[var(--primary-color)]"
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
