import offer1Image from "@/public/images/offer-banner-1.png";
import Image from "next/image";

const OfferBanner1 = () => {
  return (
    <section className="h-screen lg:h-[50vh] relative bg-ui-red flex items-center">
      {/* <Image
        width={100}
        height={100}
        src={offer1Image.src}
        alt="Offer Banner 1"
        className="h-full w-full"
      /> */}

      <div className="container">
        <h3 className="text-ui-white text-6xl font-bold w-[40%]">
          Get Your Value Box Now!
        </h3>
      </div>

      <div className="bg-ui-white p-4 absolute top-0 right-6 text-ui-red font-bold text-3xl w-min text-center uppercase">
        20% Off
      </div>
    </section>
  );
};

export default OfferBanner1;
