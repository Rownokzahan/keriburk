import Footer from "@/components/shared/Footer";
import InfiniteImageSlider from "./home/InfiniteImageSlider";
import GreenerWorldBanner from "./home/GreenerWorldBanner";
import Socials from "./home/Socials";

export default function Home() {
  return (
    <>
      <Socials />
      <GreenerWorldBanner />
      <InfiniteImageSlider />
      <Footer />
    </>
  );
}
