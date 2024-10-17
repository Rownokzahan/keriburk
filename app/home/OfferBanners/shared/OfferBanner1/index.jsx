import packets from "@/public/images/offer-1-packets.png";
import Image from "next/image";
import bgImage from "@/public/images/background/red-bg.png";
import ribbonIcon from "@/public/icons/ribbon.svg";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

const OfferBanner1 = () => {
  return (
    <section
      className="h-screen sm:h-[50vh] container bg-cover bg-center relative flex"
      style={{ backgroundImage: `url('${bgImage.src}')` }} // Background image
    >
      <div className="h-min self-center flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-8 sm:gap-0">
        <div className="sm:w-[40%] space-y-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-ui-white text-center sm:text-left">
            Get Your Value Box Now!
          </h2>

          {/* Go to Offers Button */}
          <Link
            href={"/"}
            className="w-max mx-auto sm:ms-0 sm:me-auto border-b-2 text-xl text-ui-white flex items-center gap-2"
          >
            <span>Go to Offers</span>
            <IoMdArrowForward />
          </Link>
        </div>

        {/* Product image */}
        <figure className="sm:h-[42vh] w-auto sm:me-12">
          <Image
            width={1074}
            height={770}
            src={packets.src}
            alt="products"
            className="w-full h-full"
          />
        </figure>
      </div>

      {/* Ribbon with discount */}
      <div className="absolute top-0 right-6">
        <div className="w-24 relative">
          <Image width={96} height={120} src={ribbonIcon.src} alt="" />
          <h5 className="absolute bottom-9 left-1/2 -translate-x-1/2 font-bold text-3xl text-center text-ui-red uppercase">
            {"20% Off"}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner1;
