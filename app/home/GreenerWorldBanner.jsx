import { FaArrowRight } from "react-icons/fa";
import bgImage from "@/public/images/farmer-bg.jpg";

const GreenerWorldBanner = () => {
  return (
    <section
      className="h-screen bg-cover bg-center overflow-hidden relative z-0"
      style={{ backgroundImage: `url('${bgImage.src}')` }}
    >
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-2xl md:text-5xl font-bold bg-ui-white bg-opacity-80 p-8 w-max mx-auto">
          Creating a Greener World <br /> With Every Spice
        </h2>
        <button className="flex items-center md:text-2xl text-ui-white font-semibold w-max mx-auto mt-4">
          <span>Our Communities</span>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default GreenerWorldBanner;
