"use client";

import React from "react";
import Slider from "react-slick";
import carousel1 from "@/public/images/carousel-offer-1.jpg";
import carousel2 from "@/public/images/carousel-offer-2.jpg";
import freeDelivery from "@/public/images/free-delivery-bg.png";
import Image from "next/image";

// Settings for the carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Offers = () => {
  return (
    <>
      <section className="offer-carousel-container overflow-hidden">
        <Slider {...settings}>
          <div className="w-full h-full outline-none">
            <Image
              src={carousel1.src}
              alt="Offer 1"
              width={1024}
              height={341}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full outline-none">
            <Image
              src={carousel2.src}
              alt="Offer 2"
              width={1024}
              height={341}
              className="h-full w-full object-cover"
            />
          </div>
        </Slider>
      </section>

      <section>
        <img
          src={freeDelivery.src}
          alt=""
          className="-mt-2 w-full h-[54vh] object-cover"
        />
      </section>
    </>
  );
};

export default Offers;
