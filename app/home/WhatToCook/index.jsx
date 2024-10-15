"use client";

import bgImage from "@/public/images/background/pattern-2.png";
import { useState } from "react";
import fishFry from "@/public/images/fish-fry.jpg";
import Slider from "react-slick";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Modal from "@/components/Modal";
import Image from "next/image";
import Logo from "@/components/shared/Logo";

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className={
        "!absolute top-1/2 -translate-y-1/2 left-1 !z-20 p-2 rounded-full bg-ui-white"
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
        "!absolute top-1/2 -translate-y-1/2 right-1 !z-20 p-2 rounded-full bg-ui-white"
      }
      style={style}
      onClick={onClick}
    >
      <IoMdArrowForward className="text-3xl" />
    </button>
  );
};

const WhatToCook = () => {
  // State for modal visibility
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Array of food items for the carousel
  const foodItems = [
    {
      id: 1,
      src: fishFry.src,
      title: "Panjabi Fish Fry",
      videoUrl: "https://www.youtube.com/embed/Xrea_9uMOuQ",
    },
    {
      id: 2,
      src: fishFry.src,
      title: "Panjabi Fish Fry",
      videoUrl: "https://www.youtube.com/embed/Xrea_9uMOuQ",
    },
    {
      id: 3,
      src: fishFry.src,
      title: "Panjabi Fish Fry",
      videoUrl: "https://www.youtube.com/embed/Xrea_9uMOuQ",
    },
    {
      id: 4,
      src: fishFry.src,
      title: "Panjabi Fish Fry",
      videoUrl: "https://www.youtube.com/embed/Xrea_9uMOuQ",
    },

    {
      id: 5,
      src: fishFry.src,
      title: "Panjabi Fish Fry",
      videoUrl: "https://www.youtube.com/embed/Xrea_9uMOuQ",
    },
  ];

  // Slider settings
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to open the modal
  const openModal = (videoUrl) => {
    console.log(videoUrl);
    setSelectedVideo(videoUrl);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <section className="container bg-ui-yellow !mt-0 min-h-screen flex flex-col items-center justify-center relative z-0 overflow-hidden">
      <h3 className="mb-10 text-4xl sm:text-5xl font-extrabold uppercase text-center">
        What To Cook <br /> This Week
      </h3>

      <div className="w-full h-auto overflow-hidden">
        <Slider {...settings}>
          {foodItems.map((item) => (
            <div key={item.id} className="px-1 lg:px-4 pb-2 rounded-2xl">
              <div
                className="px-5 py-8 bg-ui-green-light rounded-3xl relative mt-8"
                style={{ boxShadow: "0px 14px 12px -10px rgba(0,0,0,0.12)" }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <Logo size="large" position="center" />
                </div>

                <h1 className="text-center font-semibold text-lg mb-3 text-ui-white">
                  {item.title}
                </h1>

                <figure
                  className="w-full aspect-[27/40] relative cursor-pointer"
                  onClick={() => openModal(item.videoUrl)} // Open modal on click
                >
                  <Image
                    width={240}
                    height={355}
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="p-3 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-ui-white bg-opacity-25">
                    <FaPlay className="text-ui-white text-3xl drop-shadow ms-1" />
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="bg-ui-yellow bg-center bg-no-repeat bg-contain bg-blend-overlay absolute w-full h-full top-0 left-0 -z-10 scale-[4] md:scale-[1.6]"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      ></div>

      {/* Modal for YouTube video */}
      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={closeModal}>
          <div className="pt-12">
            <iframe
              width="100%"
              height="500"
              src={selectedVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default WhatToCook;
