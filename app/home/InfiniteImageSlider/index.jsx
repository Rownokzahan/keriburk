import Image from "next/image";
import { sliderImages1, sliderImages2 } from "./sliderImages";

const InfiniteImageSlider = () => {
  return (
    <section className="py-12 bg-ui-green">
      <div className="max-w-7xl mx-auto">
        {/* Slider moving to the left */}
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-infinite-slider-left">
            {sliderImages1.map((image, index) => (
              <figure key={index} className="min-w-24 sm:min-w-[112px]">
                <Image
                  width={112}
                  height={162}
                  src={image.src}
                  className="w-full"
                  alt={`Product ${index + 1}`}
                />
              </figure>
            ))}
            {sliderImages1.map((image, index) => (
              <figure key={index} className="min-w-24 sm:min-w-[112px]">
                <Image
                  width={112}
                  height={162}
                  src={image.src}
                  className="w-full"
                  alt={`Product ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Slider moving to the right */}
        <div className="overflow-hidden mt-12">
          <div className="flex gap-12 animate-infinite-slider-right">
            {sliderImages2.map((image, index) => (
              <figure key={index} className="min-w-24 sm:min-w-[112px]">
                <Image
                  width={112}
                  height={162}
                  src={image.src}
                  alt={`Product ${index + 8}`}
                />
              </figure>
            ))}
            {sliderImages2.map((image, index) => (
              <figure key={index} className="min-w-24 sm:min-w-[112px]">
                <Image
                  width={112}
                  height={162}
                  src={image.src}
                  alt={`Product ${index + 8}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteImageSlider;
