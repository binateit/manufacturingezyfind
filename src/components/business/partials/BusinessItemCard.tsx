import { BusinessItem } from "@/core/models/businesses/businessList";
import { formatDate } from "@/lib/format";
import { slugify } from "@/lib/slugify";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ENV } from "@/core/config/env";

interface Props {
    business: BusinessItem;
}

export const BusinessItemCard = ({ business }: Props) => {
    return (
        <div className="basis-12/12 min-[550px]:basis-6/12 xl:basis-4/12 px-[12px]">
            <div className="relative px-3 py-3 product-box bg-white w-full shadow h-full flex flex-col">
                <div className="w-[100px] text-center uppercase absolute max-[451px]:-right-5 -right-4 top-10">
                    <div className="bg-primary text-white py-1 px-2 z-9 relative date-box after:w-0 after:h-0 after:border-tl-[40px] after:border-bl-[40px] after:border-[#861622] after:rotate-90 after:top-[51px] after:right-0">
                        <span className="text-[12px] font-semibold">
                            {formatDate(business.joinDate || "")}
                        </span>
                    </div>
                </div>

                <div className="relative overflow-hidden mb-4">
                    <div className="aspect-2/1">
                        <Image
                            src={business.logoPath ? `${ENV.IMAGE_URL}${business.logoPath}` : '/images/no-image.webp'}
                            fill
                            loading="lazy"
                            className="w-full h-full object-contain"
                            alt={business.companyName}
                        />
                    </div>
                </div>

                <Link href={`/manufacturing/business/${business.companyId}/${slugify(business?.companyName || '')}.html`} className="uppercase text-primary font-semibold mb-1">
                    {business.companyName}
                </Link>

                <ul className="list-disc ml-5 mb-2 min-h-[60px] flex flex-col justify-start gap-1">
                    {business.compProvinceName && (
                        <li className="text-sm font-light text-gray-500">{business.compProvinceName}</li>
                    )}
                    {business.compCityName && (
                        <li className="text-sm font-light text-gray-500">{business.compCityName}</li>
                    )}
                    {business.compSuburb && (
                        <li className="text-sm font-light text-gray-500">{business.compSuburb}</li>
                    )}
                </ul>

                <p className="text-sm text-black font-medium mb-2 flex items-start gap-1.5 min-h-[24px]">
                    {business.compStreetAddress ? (
                        <>
                            <FontAwesomeIcon icon={faMapMarked} className="w-4 h-4 text-primary mt-0.5" />
                            <span
                                className="leading-snug break-words overflow-hidden"
                                style={{ wordBreak: "break-word", maxWidth: "240px" }}
                                title={business.compStreetAddress}
                            >
                                {business.compStreetAddress}
                            </span>
                        </>
                    ) : (
                        // Empty div to preserve space and maintain alignment
                        <div style={{ height: '24px' }}></div>
                    )}
                </p>



                <div className="flex justify-between mt-auto">
                    <Link
                        href={`/manufacturing/business/${business.companyId}/${slugify(business.companyName)}.html`}
                        className="btn bg-[var(--primary-color)] hover:bg-white border border-[var(--primary-color)] text-sm flex items-center gap-1 text-white hover:text-[var(--primary-color)]"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};
