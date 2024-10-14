"use client";

import bgImage from "@/public/images/what-to-cook-bg.jpg";
import fishFry from "@/public/images/fish-fry.jpg";
import Slider from "react-slick";
import {
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";


const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={
        "!absolute top-1/2 -translate-y-1/2 -left-0 !z-20 py-4 pe-2 rounded-e-full bg-white"
      }
      style={style}
      onClick={onClick}
    >
      <IoMdArrowBack className="text-3xl" />
    </button>
  );
};

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={
        "!absolute top-1/2 -translate-y-1/2 -right-0 !z-20 py-4 ps-2 rounded-s-full bg-white"
      }
      style={style}
      onClick={onClick}
    >
      <IoMdArrowForward className="text-3xl" />
    </button>
  );
};


const WhatToCook = () => {
  // Array of food items for the carousel
  const foodItems = [
    { id: 1, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 2, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 3, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 4, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 5, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 6, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 7, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 8, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 9, src: fishFry.src, title: "Panjabi Fish Fry" },
    { id: 10, src: fishFry.src, title: "Panjabi Fish Fry" },
  ];

  // Slider settings
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className="h-screen bg-cover bg-right-top container !mt-0 py-12 flex justify-center items-center relative"
      style={{ backgroundImage: `url('${bgImage.src}')` }}
    >
      <h3 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-5xl uppercase font-semibold text-center">
        What To Cook <br /> This Week
      </h3>

      <div className="overflow-hidden">
        <Slider {...settings}>
          {foodItems.map((item) => (
            <figure key={item.id} className="px-4">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 rounded-t-lg object-cover"
              />
              <figcaption className="p-4 rounded-b-lg bg-ui-green text-ui-white text-center font-medium text-lg">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatToCook;
