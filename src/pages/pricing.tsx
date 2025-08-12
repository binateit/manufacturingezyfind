import { SubscriptionPlan } from "@/components/pricing/SubscriptionPlan";
import DownloadApp from "@/components/shared/DownloadApp";
import PageBanner from "@/components/ui/PageBanner";
import Head from "next/head";

export default function PackagePage() {
    const title = 'Manufacturing B2B Marketplace Pricing | www.ManufacturingEzyFind.co.za'
    const description = 'Register your manufacturing, mining, engineering or construction business today and obtain more leads'
    const keywords = 'manufacturing B2B marketplace pricing, register business, register business on www.manufacturingezyfind.co.za, registration pricing for www.ManufacturingEzyFind.co.za'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Subscription Plans' />
            <div className="container">
                <h3 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Do you own a business?</h3>
                <h2 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">We help you grow it. Register today!</h2>
                <h1 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Select Subscription Plans</h1>
                <SubscriptionPlan />
            </div>
            <DownloadApp />
        </>
    );
}