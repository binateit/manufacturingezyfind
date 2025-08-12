import MoreLinks from "@/components/home/MoreLink";
import VideoBanner from "@/components/home/VideoBanner";
import { useAppUI } from "@/contexts/AppUIContext";
import { useInView } from "react-intersection-observer";
import RequestItemForm from "@/components/requestItem/RequestItemForm";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import StatsCounter from "@/components/widgets/StatsCounter";
import Testimonials from "@/components/widgets/Testimonials";
import PartnerLogosSlider from "@/components/widgets/PartnerLogosSlider";
import ProvinceWithCities from "@/components/widgets/ProvinceWithCities";
import CategoryWithProduct from "@/components/home/CategoryWithProduct";
import { SubscriptionPlan } from "@/components/pricing/SubscriptionPlan";
import Head from "next/head";
import { ENV } from "@/core/config/env";
import DownloadApp from "@/components/shared/DownloadApp";

export default function HomePage() {
  const { toggleRegisterModal } = useAppUI()
  const { ref, inView } = useInView({
    triggerOnce: true, // Load only once
    threshold: 0.1, // Trigger when 10% visible
  });

  const title = 'SA Manufacturing B2B Marketplace | Mining & Engineering Business Directory'
  const description = 'Connect with 10000+ industrial suppliers in South Africa. Browse the leading B2B marketplace for manufacturing, mining, engineering & construction companies. Get quotes today!';
  const keywords = 'Manufacturing B2B marketplace, Manufacturing business directory, SA industrial suppliers, Mining companies directory, engineering companies directory, manufacturing mobile app, manufacturing b2b marketplace mobile app'
  const canonicalUrl = `${ENV.DOMAIN_URL}`;


  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.manufacturingezyfind.co.za/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row">
        <div className="basis-12/12 md:basis-12/12 lg:order-1 xl:basis-9/16 xl:order-2 relative overflow-hidden mt-0">
          <VideoBanner />
        </div>
        <div className="basis-12/12 md:basis-6/12 lg:order-2 xl:basis-3/16 xl:order-1 relative top-0">
          <RequestItemForm />
        </div>
        <div className="basis-12/12 md:basis-6/12 lg:order-3 xl:basis-4/16 xl:order-3 mt-2 md:mt-0 md:px-1 md:pt-1 max-md:mb-5 overflow-hidden max-md:mx-[15px]">
          <MoreLinks />
        </div>
      </div>
      <div className="bg-gray-50 py-15">
        <div className="container">
          <div className="md:w-8/11 xl:w-4/5 m-auto">
            <div className="flex flex-row max-lg:flex-col justify-center">
              <div className="basis-8/12 max-lg:basis-12/12 max-lg:order-2 mt-10 xl:pt-20 xl:pr-10">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl/10 font-bold uppercase mb-4 border-s-[5px] border-[var(--primary-color)] pl-5">Manufacturing e-Commerce</h1>
                <p className="mb-3 text-md lg:text-xl">Purchase all your manufacturing, mining and construction products or services online using our ONE click shopping cart.</p>
                <ul className="mb-5 list-disc pl-5">
                  <li className="text-primary text-md">
                    <div className="text-gray-600 text-md">Request for any manufacturing</div>
                  </li>
                  <li className="text-primary text-md">
                    <div className="text-gray-600 text-md">Mining and construction products</div>
                  </li>
                  <li className="text-primary text-md">
                    <div className="text-gray-600 text-md">services online and obtain multipple quotes with ONE request</div>
                  </li>
                </ul>
                <p>This will trigger reverse bidding. A first in the industry!</p>
                <p>Register your company today to be added to coporate vendor lists and sell your products or services online.</p>
                <p className="mt-4 text-primary max-[640px]:text-lg max-[640px]:text-center">Download the App for FREE ! iPhone, Android & Huawei</p>
                <div className="flex flex-col items-center w-8/12 sm:w-full m-auto sm:flex-row md:gap-5 mt-3">
                  <Link href="https://apps.apple.com/za/app/manufacturing-ezyfind/id6443547904" target="_blank">
                    <Image src={'/images/app-store-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="iStore App Download" />
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.inno.ezyfind.manufacturing&pli=1" target="_blank">
                    <Image src={'/images/google-play-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Google Playstore App Download" />
                  </Link>
                  <Link href="https://appgallery.huawei.com/app/C107697015" target="_blank">
                    <Image src={'/images/app-gallery-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Huawei App Gallery Download" />
                  </Link>
                </div>

              </div>
              <div className="basis-4/12 text-right max-lg:basis-12/12 max-lg:order-1 max-lg:text-center">
                <div className="relative p-1 inline-block after:absolute after:bg-[var(--primary-color)] after:w-1/2 after:h-full after:right-0 after:top-0 after:rotate-60 after:animate-[wiggle_2s_ease-in-out_infinite] overflow-hidden">
                  <Image src={'/images/purchase-manufacturing-products-or-services-online.webp'} width={500} height={915} alt="" className="w-sm h-full m-auto relative z-1 bg-gray-50" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="py-15">
        <div className="container">
          <div className="md:w-8/11 xl:w-4/5 m-auto">
            <div className="flex flex-row max-lg:flex-col justify-center">
              <div className="basis-4/12 max-lg:basis-12/12 max-lg:text-center">
                <div className="relative p-1 inline-block after:absolute after:bg-[var(--primary-color)] after:w-1/2 after:h-full after:right-0 after:top-0 after:rotate-60 overflow-hidden after:animate-[wiggle_2s_ease-in-out_infinite] ">
                  <Image src={'/images/hire-manufacturing.webp'} width={500} height={915} alt="" className="w-sm h-full m-auto relative z-1 bg-white" />
                </div>
              </div>
              <div className="basis-8/12 max-lg:basis-12/12 mt-10 xl:pt-20">
                <div className="md:pl-10">
                  <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl/10 font-bold uppercase mb-4 border-s-[5px] border-[var(--primary-color)] pl-5">Hire Items Online</h1>
                  <p className="mb-3 text-md lg:text-xl">Register you business today to auction your products online.</p>
                  <ul className="mb-5 list-disc pl-5">
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Hire manufacturing</div>
                    </li>
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Mining and construction products</div>
                    </li>
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Services on the website</div>
                    </li>
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Mobile apps for iPhone</div>
                    </li>
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Mobile apps for Android</div>
                    </li>
                    <li className="text-primary text-md">
                      <div className="text-gray-600 text-md">Mobile apps for Huawei</div>
                    </li>
                  </ul>
                  <p className="mt-4 text-primary max-[640px]:text-lg max-[640px]:text-center">App available on all the App Stores</p>
                  <div className="flex flex-col items-center w-8/12 sm:w-full m-auto sm:flex-row md:gap-5 mt-3">
                    <Link href="https://apps.apple.com/za/app/manufacturing-ezyfind/id6443547904" target="_blank">
                      <Image src={'/images/app-store-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="iStore App Download" />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.inno.ezyfind.manufacturing&pli=1" target="_blank">
                      <Image src={'/images/google-play-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Google Playstore App Download" />
                    </Link>
                    <Link href="https://appgallery.huawei.com/app/C107697015" target="_blank">
                      <Image src={'/images/app-gallery-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Huawei App Gallery Download" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {inView &&
        <>

          <div className="bg-gray-50 py-15">
            <div className="container">
              <div className="md:w-8/11 xl:w-4/5 m-auto">
                <div className="flex flex-row max-lg:flex-col justify-center">
                  <div className="basis-8/12 max-lg:basis-12/12 max-lg:order-2 mt-10 xl:pt-20 xl:pr-10">
                    <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl/10 font-bold uppercase mb-4 border-s-[5px] border-[var(--primary-color)] pl-5">Bid Online</h1>
                    <p className="mb-3 text-md lg:text-xl">South Africa&apos;s number one portal for all your manufacturing, mining and construction needs.</p>
                    <ul className="mb-5 list-disc pl-5">
                      <li className="text-primary text-md">
                        <div className="text-gray-600 text-md">Bid manufacturing products</div>
                      </li>
                      <li className="text-primary text-md">
                        <div className="text-gray-600 text-md">services on auctioned items online</div>
                      </li>
                      <li className="text-primary text-md">
                        <div className="text-gray-600 text-md">Your ONE stop shop for all your manufacturing</div>
                      </li>
                      <li className="text-primary text-md">
                        <div className="text-gray-600 text-md">mining and construction needs</div>
                      </li>
                    </ul>
                    <p>This will trigger reverse bidding. A first in the industry!</p>
                    <p>Register your company today to be added to coporate vendor lists and sell your products or services online.</p>
                    <p className="mt-4 text-primary max-[640px]:text-lg max-[640px]:text-center">App available on all the App Stores</p>
                    <div className="flex flex-col items-center w-8/12 sm:w-full m-auto sm:flex-row md:gap-5 mt-3">
                      <Link href="https://apps.apple.com/za/app/manufacturing-ezyfind/id6443547904" target="_blank">
                        <Image src={'/images/app-store-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="iStore App Download" />
                      </Link>
                      <Link href="https://play.google.com/store/apps/details?id=com.inno.ezyfind.manufacturing&pli=1" target="_blank">
                        <Image src={'/images/google-play-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Google Playstore App Download" />
                      </Link>
                      <Link href="https://appgallery.huawei.com/app/C107697015" target="_blank">
                        <Image src={'/images/app-gallery-btn.webp'} width={486} height={142} className="w-full scale-80  md:scale-100" alt="Huawei App Gallery Download" />
                      </Link>
                    </div>
                  </div>

                  <div className="basis-4/12 max-lg:basis-12/12 max-lg:order-1 text-right max-lg:text-center">
                    <div className="relative p-1 inline-block after:absolute after:bg-[var(--primary-color)] after:w-1/2 after:h-full after:right-0 after:top-0 after:rotate-60 overflow-hidden after:animate-[wiggle_2s_ease-in-out_infinite]">
                      <Image src={'/images/bid.webp'} width={500} height={915} alt="" className="w-sm h-full m-auto relative z-1 bg-gray-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div>
          <div className="py-15 bg-red-50">
            <StatsCounter />
          </div>
          <div className="pt-15">
            <CategoryWithProduct />
          </div>
          <div className="bg-gray-50 py-10 md:py-15">
            <ProvinceWithCities />
          </div>

          <div className="testimonials bg-red-50 py-10 md:py-15 px-5 md:px-15">
            <Testimonials />
          </div>

          <div className="h-auto xl:h-[525px] overflow-hidden relative">
            <div className="overflow-hidden">
              <Image src={'/images/middle-banner.webp'} width={1920} height={525} alt="middle-banner" className="w-full" />
              <div className="max-md:block w-full md:w-6/12 md:absolute md:top-0 md:right-0 h-full before:h-full md:before:absolute md:before:bg-[rgb(134,22,34,0.9)] before:top-0 2xl:before:-right-23 before:w-[1000px] md:before:-skew-x-5 max-md:before flex items-center">
                <div className="max-md:w-full max-md:bg-[var(--primary-color)] relative md:top-15 p-5 md:px-20 text-white flex flex-col gap-5 justify-center">
                  <Image src={'/images/logo-transparent.webp'} width={145} height={95} alt="logo" className="md:absolute md:left-9 md:-top-22 " />
                  <h1 className="md:text-3xl xl:text-4xl 2xl:text-[2.9rem] mb-2">Enter The World of Opportunity!</h1>
                  <p className="md:text-xl xl:text-2xl 2xl:text-[2rem] font-bold">Request for a Quote?</p>
                  <p className="md:text-lg xl:text-xl 2xl:text-2xl"><i>Register here and submit your request online</i></p>
                  <Button onClick={() => toggleRegisterModal()} className="group xl:text-xl 2xl:text-2xl font-bold flex items-center">Register Now <FontAwesomeIcon icon={faChevronRight} className="text-lg transition duration-300 ease-in-out group-hover:translate-x-2 ml-4" /> </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h3 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Do you own a business?</h3>
            <h2 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">We help you grow it. Register today!</h2>
            <h1 className="sm:text-3xl md:text-4xl/10 font-bold mb-10 text-center uppercase">Select Subscription Plans</h1>
            <SubscriptionPlan />
          </div>

          <DownloadApp />

          <div className="py-10 md:py-15">
            <PartnerLogosSlider />
          </div>
        </>
      }
    </>)
}

