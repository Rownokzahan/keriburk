import freeDelivery from "@/public/images/free-delivery-bg.png";
import Image from "next/image";
import ProductShowcase from "./ProductShowcase";

const OfferBanner2 = () => {
  return (
    <section className="h-screen lg:h-[50vh] bg-ui-yellow flex items-center overflow-hidden">
      <ProductShowcase />

      <div className="container">
        <h3 className="text-ui-white text-6xl font-bold w-[40%] text-center">
          Get Free Delivery On Orders Above 500 Tk
        </h3>
      </div>
    </section>
  );
};

export default OfferBanner2;
