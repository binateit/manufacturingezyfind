import { GET_PACKAGE_LIST } from "@/core/graphql/queries/getPackageList";
import { Package } from "@/core/models/packages/package";
import { useQuery } from "@apollo/client";
import { useState, useCallback } from "react";
import Loading from "../shared/Loading";
import { formatCurrency } from "@/lib/format";
import PackageDetail from "./PackageDetail";
import { useRouter } from "next/router";
import { slugify } from "@/lib/slugify";
import tenureItems from "@/core/constants/tenure";
import { calculateDiscountedSubscriptionPrice } from "@/lib/subscriptionUtils";

export function SubscriptionPlan() {
  const [tenure, setTenure] = useState<number>(1);
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_PACKAGE_LIST, {
    variables: { status: true },
  });

  const packageList: Package[] = data?.getMstPackageList?.result ?? [];

  const handlePackageSelect = useCallback(
    (packageName: string, tenureName: string) => {
      router.push(
        `/manufacturing/list-business?package=${packageName}&tenure=${tenureName}`
      );
    },
    [router]
  );

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Failed to load packages.</p>;
  if (!packageList.length)
    return <p className="text-center text-gray-500">No packages available.</p>;

  return (
    <div>
      
      <div className="flex max-[640px]:flex-col max-[500px]:gap-2 flex-row flex-wrap gap-4 justify-center mt-5 md:mt-8 lg:mt-15">
        {tenureItems.map((t) => (
          <div
            key={t.key}
            className={`group ${t.color} h-[50px] px-3 uppercase flex-1 text-center cursor-pointer transition-all duration-300`}
            onClick={() => setTenure(t.key)}
          >
            <span
              className={`text-white text-md lg:text-lg font-semibold group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col lg:flex-row items-center justify-center flex-wrap h-full ${
                tenure === t.key ? "" : "opacity-70"
              }`}
            >
              {t.label} {t.extra && <span className="ml-1">{t.extra}</span>}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-y-5 sm:gap-y-15 mt-10 md:mt-8 lg:mt-15 mb-15 px-2 md:px-0">
        {packageList.map((pkg) => {
          const { price, discountedPrice, discountPercent } = calculateDiscountedSubscriptionPrice(pkg, tenure);
          const tenureLabel = tenureItems.find((t) => t.key === tenure)?.label ?? "";

          return (
            <div
              key={`${pkg.packageID}-${tenure}`}
              className="basis-12/12 md:basis-12/12 lg:basis-4/12 max-[451px]:px-0 px-5 sm:px-10"
            >
              <div className="bg-white lg:px-2 border border-transparent hover:border-[var(--primary-color)] w-full md:w-[350px] mx-auto lg:w-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] pt-5 h-[520px] min-[451px]:h-[550px] lg:h-[600px] relative">
                {discountPercent > 0 && (
                  <div className="h-10 w-10 bg-primary absolute top-0 right-0 flex items-center justify-center">
                    <p className="text-white text-sm/4 text-center">{discountPercent}% Off</p>
                  </div>
                )}

                <p className="text-primary uppercase text-[25px] lg:text-2xl xl:text-3xl text-center font-medium">
                  {pkg.packageName}
                </p>

                <div className="w-[281px] text-center uppercase absolute max-[451px]:-right-5 -right-10 top-15">
                  {tenure !== 1 ? (
                    <div>
                      <p className="text-gray-500 font-semibold text-md py-1 bg-gray-100 border-t border-r border-l border-gray-300">
                        <s>{formatCurrency(price)}</s>
                      </p>
                      <div className="bg-primary text-white py-3 z-10 relative plan-price">
                        <span className="text-lg font-semibold">{formatCurrency(discountedPrice)}</span>
                        <span className="text-sm font-light">{` per ${tenure} Month${tenure > 1 ? "s" : ""}`}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-primary text-white py-3 z-10 relative plan-price">
                      <span className="text-lg font-semibold">{formatCurrency(price)} /</span>
                      <span className="text-sm font-light"> Per Month</span>
                    </div>
                  )}
                </div>

                <div>
                  <PackageDetail packageID={pkg.packageID ?? 0} />
                </div>

                <button
                  type="button"
                  className="group bg-[#2D292A] hover:bg-[#242323] transition-all duration-300 ease-in-out text-white py-3 w-[200px] text-center uppercase absolute max-[451px]:-left-5 -left-10 bottom-6 min-[451px]:bottom-12 plan-button cursor-pointer"
                  onClick={() => handlePackageSelect(slugify(pkg.packageName), slugify(tenureLabel))}
                >
                  <span className="text-lg font-semibold block transition-all duration-500 ease-in-out tracking-normal group-hover:tracking-widest">
                    Select
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
