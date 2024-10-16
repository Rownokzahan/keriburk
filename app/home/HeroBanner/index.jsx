"use client";

import Image from "next/image";
import Slider from "react-slick";
import images from "./images";

// Settings for the carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: false,
  swipe: false,
};

const HeroBanner = () => {
  return (
    <section className="banner-carousel-container overflow-hidden">
      <Slider {...settings}>
        {images.map((image) => (
          <div
            key={image.id}
            className="h-[calc(100vh-69px)] md:h-[calc(100vh-66px)]"
          >
            {/* Mobile Image - visible on small screens */}
            <figure className="w-full h-full md:hidden">
              <Image
                src={image.mobile.src}
                alt={`Offer ${image.id}`}
                width={1920}
                height={2560}
                className="w-full h-full"
              />
            </figure>

            {/* Tablet Image - visible on medium screens */}
            <figure className="w-full h-full hidden md:block lg:hidden">
              <Image
                src={image.tablet.src}
                alt={`Offer ${image.id}`}
                width={1920}
                height={2560}
                className="w-full h-full"
              />
            </figure>

            {/* Desktop Image - visible on large screens */}
            <figure className="w-full h-full hidden lg:block">
              <Image
                src={image.desktop.src}
                alt={`Offer ${image.id}`}
                width={1920}
                height={2560}
                className="w-full h-full"
              />
            </figure>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;
