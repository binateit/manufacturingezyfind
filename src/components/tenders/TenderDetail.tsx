import Link from "next/link";
import { PostDetail } from "@/core/models/posts/postDetail";
import { formatDate } from "@/lib/format";

interface TenderDetailProps {
    tender: PostDetail;
}

export default function TenderDetail({ tender }: TenderDetailProps) {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="container">
                <div className='mt-10 mb-5'>
                    <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/tenders'> Tenders</Link> / <span className='text-gray-500'>{tender?.title}</span>
                </div>
            </div>
            <div className="mt-10 lg:flex -mx-5 mb-10">

                <div className="lg:basis-8/12 px-5">
                    <div className="p-5 border border-gray-300 card-shadow">

                        <h1 className="text-3xl font-bold text-red-800 mb-4">
                            {tender.title}
                        </h1>

                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Starting Date
                            </p>
                            <p className='text-sm font-semibold'>
                                {formatDate(tender.startDate || "")}
                            </p>
                        </div>
                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Closing Date
                            </p>
                            <p className='text-sm font-semibold'>
                                {formatDate(tender.endDate || "")}
                            </p>
                        </div>
                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Company Name
                            </p>
                            <p className='text-sm font-semibold'>
                                {tender.companyName || ""}
                            </p>
                        </div>
                        <div className="max-[640px]:border-t border-gray-300 my-6 pt-2">
                            <p className='text-primary text-xl font-semibold'>
                                Description
                            </p>
                            <div
                                className="custom-html-content"
                                dangerouslySetInnerHTML={{
                                    __html: tender.description.replace(/\r\n/g, '<br/>'),
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:basis-4/12 px-5 mt-5 lg:mt-0">
                    {/* <BusinessCard companyId={tender.companyID} /> */}
                </div>
            </div>
        </div>
    );
}