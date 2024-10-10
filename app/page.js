import InfiniteImageSlider from "./home/InfiniteImageSlider";
import GreenerWorldBanner from "./home/GreenerWorldBanner";
import Socials from "./home/Socials";
import FindStores from "./home/FindStores";

export default function Home() {
  return (
    <>
      <FindStores />
      <Socials />
      <GreenerWorldBanner />
      <InfiniteImageSlider />
    </>
  );
}
