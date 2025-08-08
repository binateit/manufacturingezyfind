import { SubscriptionPlan } from "@/components/pricing/SubscriptionPlan";
import PageBanner from "@/components/ui/PageBanner";

export default function PackagePage() {
    return (
        <>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Subscription Plans' />
            <div className="container">
                <h3 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Do you own a business?</h3>
                <h2 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">We help you grow it. Register today!</h2>
                <h1 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Select Subscription Plans</h1>
                <SubscriptionPlan />
            </div>
        </>
    );
}