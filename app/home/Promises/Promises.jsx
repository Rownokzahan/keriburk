import bgImage from "@/public/images/background/promises-bg.png";
import darazIcon from "@/public/icons/promises/daraz.svg";
import deliveryIcon from "@/public/icons/promises/delivery.svg";
import promisesData from "./promisesData";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Logo from "@/components/shared/Logo";

const Promises = () => {
  return (
    <section
      className="min-h-screen bg-cover xl:bg-right"
      style={{ backgroundImage: `url('${bgImage.src}')` }}
    >
      <div className="container py-14">
        <div>
          <div className="hidden md:block">
            <Logo size="large" />
          </div>

          <div className="md:hidden">
            <Logo size="large" position="center" />
          </div>

          <h3
            className="mt-1 mb-10 text-4xl sm:text-5xl text-center md:text-left font-extrabold uppercase text-ui-green"
            style={{
              textShadow:
                "1px -1px 0px #FFFFFF, -1px -1px 0px #FFFFFF, -1px 1px 0px #FFFFFF, 1px 1px 0px #FFFFFF",
            }}
          >
            Promises
          </h3>
        </div>

        <div className="md:w-max grid grid-cols-2 gap-y-6 gap-x-4 md:gap-12">
          {promisesData.map((promise) => (
            <div
              key={promise.id}
              className="flex flex-col md:flex-row md:justify-center items-center  gap-2 md:gap-4"
            >
              <Image
                width={56}
                height={56}
                src={promise.iconUrl}
                alt={promise.title}
                className="w-14 h-14 rounded-full"
              />

              <div className="w-full md:max-w-52 text-center md:text-left uppercase">
                <h4 className="font-bold text-sm">{promise.title}</h4>
                <p className="text-xs">{promise.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-6">
          <button className="w-52 px-4 py-2 rounded-full bg-ui-red text-ui-white text-lg flex justify-between items-center">
            <span>Order Now</span>
            <IoMdArrowForward />
          </button>

          <div className="flex items-center gap-3">
            <Image
              width={48}
              height={48}
              src={darazIcon.src}
              alt="Daraz icon"
              className="w-12 h-12 rounded bg-ui-black"
            />
            <Image
              width={48}
              height={48}
              src={deliveryIcon.src}
              alt="Delivery icon"
              className="w-12 h-12 rounded bg-ui-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promises;
