import Image from "next/image";
import productImage1 from "@/public/images/slider-images/Achari-gosht.jpg";
import productImage2 from "@/public/images/slider-images/Bombay-chicken-biryani.jpg";
import productImage3 from "@/public/images/slider-images/Fish-tikka.jpg";
import productImage4 from "@/public/images/slider-images/Haleem.jpg";
import productImage5 from "@/public/images/slider-images/Karachi-beef-biryani.jpg";
import productImage6 from "@/public/images/slider-images/Karahi-Fry-Gosht.jpg";
import productImage7 from "@/public/images/slider-images/Lahori-chargha.jpg";
import productImage8 from "@/public/images/slider-images/Mughlai-Korma-mix.jpg";
import productImage9 from "@/public/images/slider-images/Nehari.jpg";
import productImage10 from "@/public/images/slider-images/Paya.jpg";
import productImage11 from "@/public/images/slider-images/Punjabi-fish-fry.jpg";
import productImage12 from "@/public/images/slider-images/Rawalpindi.jpg";
import productImage13 from "@/public/images/slider-images/Shahi-badam-kheer-mix.jpg";
import productImage14 from "@/public/images/slider-images/Sheer-khurma-mix.jpg";
import productImage15 from "@/public/images/slider-images/Sindhi-mutton.jpg";

// First array of images
const sliderImages1 = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
  productImage6,
  productImage7,
  productImage8,
  productImage9,
];

// Second array of images
const sliderImages2 = [
  productImage8,
  productImage9,
  productImage10,
  productImage11,
  productImage12,
  productImage13,
  productImage14,
  productImage15,
  productImage1,
];

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
