import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { UrlObject } from "url";

type MoreLinkItemProps = {
  href: string | UrlObject;
  src: string;
  alt: string;
  label: string;
};

// Reusable Link Item component
const MoreLinkItem = ({
    href,
    src,
    alt,
    label,
}: MoreLinkItemProps) => (
    <Link href={href} className="flex items-center gap-2 text-sm mb-2.5">
        <Image src={src} width={30} height={30} alt={alt} />
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
                src: "/images/whats-hot.webp",
                alt: "Hot Products On Sale",
                label: "What's Hot",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                src: "/images/endingsoon.webp",
                alt: "Products Specials Ending Soon",
                label: "Ending Soon",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                src: "/images/new.webp",
                alt: "New Products And Services Listed",
                label: "What's New",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "normal" } },
                src: "/images/top-searches.webp",
                alt: "Top Searched Products",
                label: "Top Searches",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "special" } },
                src: "/images/recent-buys.webp",
                alt: "Recent Sole Products and Services",
                label: "Recent Buyers",
            },
        ],
    },
    {
        title: null,
        items: [
            {
                href: { pathname: "/manufacturing/businesses" },
                src: "/images/whats-hot.webp",
                alt: "Most Viewed Manufacturing Businesses",
                label: "Most Viewed",
            },
            {
                href: { pathname: "/manufacturing/businesses" },
                src: "/images/endingsoon.webp",
                alt: "Businesses With Most Interactions",
                label: "Most interactive",
            },
        ],
    },
    {
        title: "Download",
        items: [
            {
                href: { pathname: "/manufacturing/product", query: { scope: "normal" } },
                src: "/images/whats-hot.webp",
                alt: "Most Viewed Digital Products",
                label: "Most Viewed",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "featured" } },
                src: "/images/endingsoon.webp",
                alt: "Frequent downloaded Digital Products",
                label: "Frequent downloaded",
            },
            {
                href: { pathname: "/manufacturing/product", query: { scope: "special" } },
                src: "/images/top-searches.webp",
                alt: "Most downloaded Digital Products",
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
