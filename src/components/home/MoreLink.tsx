import Link from "next/link";
import Slider from "react-slick";
import { UrlObject } from "url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFire, 
  faClock, 
  faStar, 
  faSearch, 
  faUsers, 
  faEye, 
  faHandshake, 
  faDownload,
  faBuilding,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type MoreLinkItemProps = {
  href: string | UrlObject;
  icon: IconProp;
  label: string;
};

// Reusable Link Item component
const MoreLinkItem = ({
    href,
    icon,
    label,
}: MoreLinkItemProps) => (
    <Link href={href} className="flex items-center gap-2 text-sm mb-2.5">
        <FontAwesomeIcon icon={icon} className="w-6 h-6 text-blue-600" />
        {label}
    </Link>
);

// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
};

// Links configuration
const slides = [
    {
        title: null, // No heading
        items: [
            {
                href: { pathname: "/manufacturing/product", query: { scope: "special" } },
                icon: faFire,
                label: "What's Hot",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                icon: faClock,
                label: "Ending Soon",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                icon: faStar,
                label: "What's New",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "normal" } },
                icon: faSearch,
                label: "Top Searches",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "special" } },
                icon: faUsers,
                label: "Recent Buyers",
            },
        ],
    },
    {
        title: null,
        items: [
            {
                href: { pathname: "/manufacturing/businesses" },
                icon: faEye,
                label: "Most Viewed",
            },
            {
                href: { pathname: "/manufacturing/businesses" },
                icon: faHandshake,
                label: "Most interactive",
            },
        ],
    },
    {
        title: "Download",
        items: [
            {
                href: { pathname: "/manufacturing/product", query: { scope: "normal" } },
                icon: faBuilding,
                label: "Most Viewed",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                icon: faIndustry,
                label: "Frequent downloaded",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "special" } },
                icon: faDownload,
                label: "Most downloaded",
            },
        ],
    },
];

const MoreLinks = () => {
    return (
        <div className="h-full border border-gray-300 p-4 xl:p-2 2xl:p-3 pb-[50px]">
            <Slider {...sliderSettings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        {slide.title && (
                            <p className="text-md xl:text-sm 2xl:text-lg font-semibold mb-1 max-xl:mb-2 2xl:mb-2">
                                {slide.title}
                            </p>
                        )}
                        <div className="columns-2">
                            {slide.items.map((item, idx) => (
                                <MoreLinkItem key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MoreLinks;
