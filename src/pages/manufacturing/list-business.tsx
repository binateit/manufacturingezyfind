import BusinessRegister from "@/components/register/BusinessRegister";
import DownloadApp from "@/components/shared/DownloadApp";
import Loading from "@/components/shared/Loading";
import PageBanner from "@/components/ui/PageBanner";
import tenureItems, { TenureItem } from "@/core/constants/tenure";
import { GET_PACKAGE_LIST } from "@/core/graphql/queries/getPackageList";
import { Package } from "@/core/models/packages/package";
import { initializeApollo } from "@/lib/apolloClient";
import { slugify } from "@/lib/slugify";
import { useRouter } from "next/router";

interface Props {
    packageList: Package[];
}

export default function ListBusinessPage({ packageList }: Props) {
    const router = useRouter();
    const { query, isReady } = router;

    if (!isReady) return <Loading />;

    const packageName = typeof query.package === "string" ? query.package : "";
    const tenure = typeof query.tenure === "string" ? query.tenure : "";

    if (!packageName || !tenure) {
        router.push('/pricing');
    }

    const selectedPackage = packageList?.find(pkg =>
        typeof pkg?.packageName === "string" &&
        slugify(pkg.packageName) === slugify(packageName)
    );

    const selectedTenure = tenureItems?.find(t =>
        typeof t?.label === "string" &&
        slugify(t.label) === slugify(tenure)
    );


    if (!selectedPackage || !selectedTenure) {
        router.push('/pricing');
    }


    return (
        <>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Register Business' />
            <div className="container">
                {
                    selectedPackage && selectedTenure &&
                    <BusinessRegister selectedPackage={selectedPackage as Package} selectedTenure={selectedTenure as TenureItem} />
                }
            </div>
            <DownloadApp />

        </>
    );
}

export const getStaticProps = async () => {
    const apolloClient = initializeApollo();

    const { data: packageData } = await apolloClient.query({
        query: GET_PACKAGE_LIST,
        variables: { status: true },
    });

    return {
        props: {
            packageList: packageData?.getMstPackageList?.result
        }
    };
};