import { IoMdArrowForward } from "react-icons/io";
import ProductShowcase from "./ProductShowcase";
import Link from "next/link";

const OfferBanner2 = () => {
  return (
    <section className="h-screen sm:h-[50vh] container flex items-center overflow-hidden">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Product showcase section */}
        <ProductShowcase />

        <div className="max-w-xl flex-1 space-y-6 flex flex-col items-end">
          <h3 className="text-4xl sm:text-5xl text-ui-white font-bold text-center">
            Get Free Delivery On Orders Above 500 Tk
          </h3>

          {/* Go to Products Button */}
          <Link
            href={"/"}
            className="w-max mx-auto border-b-2 text-xl text-ui-white flex items-center gap-2"
          >
            <span>Go to Products</span>
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner2;
