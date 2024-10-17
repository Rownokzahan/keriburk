"use client";

import bgImage from "@/public/icons/swirl.svg";
import { useEffect, useState } from "react";
import productImages from "./productImages";
import Image from "next/image";

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="w-max relative h-full">
      {/* Product Image */}
      <figure className="h-[50vh] aspect-square">
        <Image
          width={697}
          height={697}
          src={productImages[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full"
        />
      </figure>

      {/* Spinner Wrapper */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Spinning element */}
        <div className="w-[5000px] h-[5000px] animate-spin-slow">
          <Image
            height={589}
            width={589}
            src={bgImage.src}
            alt="swirl background"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
