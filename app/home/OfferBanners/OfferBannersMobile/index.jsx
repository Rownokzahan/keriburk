"use client"

import { useState, useEffect } from "react";
import OfferBanner1 from "../shared/OfferBanner1";
import OfferBanner2 from "../shared/OffersBanner2";

const OfferBannersMobile = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [<OfferBanner1 key="1" />, <OfferBanner2 key="2" />];

  // Automatically switch banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [banners.length]);

  return (
    <div className="relative h-full w-full">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBanner ? "opacity-100" : "opacity-0"
          }`}
        >
          {banner}
        </div>
      ))}
    </div>
  );
};

export default OfferBannersMobile;
