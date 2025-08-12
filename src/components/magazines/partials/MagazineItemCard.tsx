import { formatDate } from "@/lib/format";
import { slugify } from "@/lib/slugify";
import Image from "next/image";
import Link from "next/link";
import { ENV } from "@/core/config/env";
import { MagazineItem } from "@/core/models/magazines/magazineList";

interface Props {
    magazine: MagazineItem;
}

export const MagazineItemCard = ({ magazine }: Props) => {
    return (
        <div className="basis-12/12 min-[550px]:basis-6/12 xl:basis-4/12 px-[12px]">
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
                <p className="text-sm text-black font-medium mb-2">Company: {magazine.companyName}</p>
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
};
