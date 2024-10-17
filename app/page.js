import GreenerWorldBanner from "./home/GreenerWorldBanner";
import Socials from "./home/Socials";
import FindStores from "./home/FindStores";
import HeroBanner from "./home/HeroBanner";
import WhatToCook from "./home/WhatToCook";
import Promises from "./home/Promises/Promises";
import OfferBanners from "./home/OfferBanners";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <OfferBanners />
      <WhatToCook />
      <Promises />
      <FindStores />
      <Socials />
      <GreenerWorldBanner />
    </>
  );
}
