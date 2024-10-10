"use client";

import Image from "next/image";
import Slider from "react-slick";
import socialItems from "./socialItems";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

// Custom Arrow Component
const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={"!absolute top-1/2 -left-3 !z-20"}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className="text-4xl text-ui-green" />
    </button>
  );
};

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={"!absolute top-1/2 -right-3 !z-20"}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="text-4xl text-ui-green" />
    </button>
  );
};

const SocialsMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container pb-8 mb-responsive">
      <h3 className="mb-2 text-2xl font-bold text-center">
        Find Us On Socials
      </h3>
      <div className="flex flex-col items-center">
        <Slider {...settings} className="w-full">
          {socialItems.map((item, index) => (
            <div key={index} className="relative w-full pt-6 px-6">
              <figure className="h-[72vh] relative">
                <Image
                  fill
                  src={item.image.src}
                  alt={item.image.alt}
                  className="object-cover rounded-3xl"
                />
              </figure>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={48}
                height={48}
                className="absolute top-0 right-0"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SocialsMobile;
