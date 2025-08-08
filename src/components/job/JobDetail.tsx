import Link from "next/link";
import { PostDetail } from "@/core/models/posts/postDetail";
import { formatDate } from "@/lib/format";

interface JobDetailProps {
    job: PostDetail;
}

export default function JobDetail({ job }: JobDetailProps) {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="container">
                <div className='mt-10 mb-5'>
                    <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/jobs'> Jobs</Link> / <span className='text-gray-500'>{job?.title}</span>
                </div>
            </div>
            <div className="mt-10 lg:flex -mx-5 mb-10">
                <div className="lg:basis-8/12 px-5">
                    <div className="p-5 border border-gray-300 card-shadow">

                        <h1 className="text-3xl font-bold text-red-800 mb-4">
                            {job.title}
                        </h1>

                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Starting Date
                            </p>
                            <p className='text-sm font-semibold'>
                                {formatDate(job.startDate || "")}
                            </p>
                        </div>
                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Closing Date
                            </p>
                            <p className='text-sm font-semibold'>
                                {formatDate(job.endDate || "")}
                            </p>
                        </div>
                        <div className='  max-[640px]:border-t border-gray-300 my-6 pt-2  '>
                            <p className='text-primary text-xl font-semibold'>
                                Company Name
                            </p>
                            <p className='text-sm font-semibold'>
                                {job.companyName || ""}
                            </p>
                        </div>
                        <div className="max-[640px]:border-t border-gray-300 my-6 pt-2">
                            <p className='text-primary text-xl font-semibold'>
                                Description
                            </p>
                            <div
                                className="custom-html-content"
                                dangerouslySetInnerHTML={{
                                    __html: job.description.replace(/\r\n/g, '<br/>'),
                                }}
                            />
                        </div>

                        {/* <div className='py-3 border-t border-gray-300 text-right mt-5'>
                            <Button className='bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10'>Apply Now</Button>
                        </div> */}
                    </div>
                </div>
                <div className="lg:basis-4/12 px-5 mt-5 lg:mt-0">
                    {/* <BusinessCard companyId={jobs.companyID} /> */}
                </div>
            </div>
        </div>
    );
}