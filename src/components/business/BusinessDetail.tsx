import { ENV } from "@/core/config/env";
import { BusinessDetails } from "@/core/models/businesses/businessDetail";
import { formatDate } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import RatingWidget from "../widgets/Rating";
import { RatingKeyType, ReviewKeyType } from "@/core/constants/enum";
import CategoryWidget from "../widgets/Category";
import ReviewWidget from "../widgets/Review";

interface BusinessDetailProps {
    business: BusinessDetails;
}

export default function BusinessDetail({ business }: BusinessDetailProps) {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="container">
                <div className='mt-10 mb-5'>
                    <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/business'> Manufacturing Companies</Link> / <span className='text-gray-500'>{business?.companyName}</span>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 md:mt-10 gap-10">
                <div className="basis-12/12 lg:basis-8/12 overflow-hidden">
                    <div className='w-full aspect-866/343 relative'>
                        <Image
                            src={business?.logoPath ? `${ENV.IMAGE_URL}${business?.logoPath}` : '/images/company-image.webp'}
                            width={277} height={237}
                            alt='Comapny-mage' className='h-full w-full object-cover' />
                        <p className='py-3 px-5 text-lg bg-black/70 text-white absolute bottom-0 left-0 w-full'>{business?.companyName}</p>
                    </div>
                    <p className='text-lg font-semibold mt-10'>Description:</p>
                    <div
                        className="custom-html-content"
                        dangerouslySetInnerHTML={{ __html: business?.compDescription || '' }}
                    ></div>

                    {/* <SpecialByBusiness companyId={business?.companyId || null} companyName={business?.companyName || null} />

            <DigitalByBusiness companyId={business?.companyId || null} companyName={business?.companyName || null} />

            <ProductByBusiness companyName={business?.companyName || null} companyId={business?.companyId || null} />

            <TenderByBusiness companyId={business?.companyId || null} companyName={business?.companyName || null} />

             */}
                    <ReviewWidget keyType={ReviewKeyType.Company} key={business?.companyId || 0} keyName={business?.companyName || ''} />
                </div>
                <div className="basis-12/12 lg:basis-4/12">
                    <div className='bg-primary text-white py-3 px-4 text-lg font-semibold'>
                        Information
                    </div>
                    <div className='p-4 border border-gray-300'>
                        <p className='text-lg font-semibold mb-1'>Address:</p>
                        <p className='mb-4'>{business?.compStreetAddress}</p>
                        <p className='text-lg font-semibold mb-1'>Status:</p>
                        <p className="mb-4 relative after:absolute after:content-[url('/images/verified_icon.png')] after:h-[25px] after:w-[30px] after:-right-10 inline-block">{business?.companyStatus}</p>

                        <p className='text-lg font-semibold mb-1'>Reg. Date:</p>
                        <p className='mb-4'>{formatDate(business?.joinDate || "")}</p>

                        <p className='text-lg font-semibold mb-1'>Contact Number:</p>
                        <p className='mb-4'>{business?.compHelpDeskNumber}</p>

                        <p className='text-lg font-semibold mb-1'>Mail Address:</p>
                        <p className='mb-4'>{business?.compEmailId}</p>

                        <p className='text-lg font-semibold mb-1'>Operating hours:</p>
                        <ul className='list-disc text-primary pl-5'>
                            <li><span className='text-black text-sm'>Monday : 08:00am - 05.00pm</span></li>
                            <li><span className='text-black text-sm'>Tuesday : 08:00am - 05.00pm</span></li>
                            <li><span className='text-black text-sm'>Wednesday : 08:00am - 05.00pm</span></li>
                            <li><span className='text-black text-sm'>Thursday : 08:00am - 05.00pm</span></li>
                            <li><span className='text-black text-sm'>Friday : 08:00am - 05.00pm</span></li>
                            <li><span className='text-black text-sm'>Weekend : Closed</span></li>
                            <li><span className='text-black text-sm'>Public Holiday : 09:00am - 01:00pm</span></li>
                        </ul>

                        <a href='#' className='btn w-full block text-center mt-10 bg-[var(--primary-color)] border border-[var(--primary-color)] text-white transition-all hover:bg-white hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'>Contact Us First 30min Free Consultation</a>
                        <a href='#' className='block text-center text-primary mt-2 text-sm'>T&apos;s & C&apos;s Apply</a>
                    </div>

                    <div className='mt-10'>
                        <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(business?.compStreetAddress || '')}&output=embed`} width="100%" height="450" className='aspect-square' loading="lazy" ></iframe>
                    </div>
                    <RatingWidget keyType={RatingKeyType.Company} key={business?.companyId || 0} />
                </div>
            </div>
            <CategoryWidget />
        </div>
    );
}