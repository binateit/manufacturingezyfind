import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";

const logos = [
  { src: "/images/department-of-science-and-innovation.webp", alt: "Department of Science and Innovation" },
  { src: "/images/department-trade-industry-and-competition.webp", alt: "Department of Trade, Industry and Competition" },
  { src: "/images/industrial-development-corporation.webp", alt: "Industrial Development Corporation" },
  { src: "/images/national-empowerment-fund.webp", alt: "National Empowerment Fund" },
  { src: "/images/southern-africa-stainless-steel-development-association.webp", alt: "Southern Africa Stainless Steel Development Association" },
  { src: "/images/technoloty-innovation-agency.webp", alt: "Technology Innovation Agency" },
];

const PartnerLogosSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 750, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Slider {...settings} className="container">
      {logos.map((logo, index) => (
        <div key={index} className="aspect-3/2 h-[100px] px-10">
          <Image
            src={logo.src}
            width={385}
            height={131}
            alt={logo.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </Slider>
  );
};

export default PartnerLogosSlider;
