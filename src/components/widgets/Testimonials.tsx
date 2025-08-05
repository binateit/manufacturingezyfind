import Image from 'next/image';
import { FC } from 'react';
import Slider from 'react-slick';

const testimonialsData = [
  {
    name: 'Dineo Mabatha',
    image: '/images/testimonials/Reviewer-1.webp',
    content:
      "I listed my Products and Services on this website and got contacted by BIG Corporate companies to be on their VENDOR list. Sell your products online or shop here for a hassle-free experience. South Africa's first manufacturing eCommerce Platform.",
  },
  {
    name: 'Tsheko Tselo',
    image: '/images/testimonials/Reviewer-2.webp',
    content:
      "Sell, Hire or Auction all your products or services on this awesome mobile Manufacturing EzyFind app. Will definitely recommend to any manufacturing business owner as a must-have app for all your manufacturing products and services.",
  },
  {
    name: 'Alan Hueg',
    image: '/images/testimonials/Reviewer-3.webp',
    content:
      'Sell product or services online WITH or WITHOUT a price. Sell every product at a different price based on volumes, timelines, client etc. Auction products online based on time, price or best buy. Live chat, negotiate price and allow for reverse bidding.',
  },
  {
    name: 'Glen Aboo',
    image: '/images/testimonials/Reviewer-4.webp',
    content:
      'Awesome website & mobile app to PURCHASE any manufacturing product or services on this simple eCommerce platform.',
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const Testimonials: FC = () => {
  return (
    <Slider {...sliderSettings} className="lg:w-[800px] m-auto text-center px-4">
      {testimonialsData.map((testimonial, index) => (
        <div key={index}>
          <Image
            src={testimonial.image}
            width={100}
            height={100}
            alt={testimonial.name}
            className="m-auto rounded-full border-8 border-white shadow-xl mb-3"
          />
          <p className="text-2xl text-primary font-bold mb-4">{testimonial.name}</p>
          <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{testimonial.content}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
