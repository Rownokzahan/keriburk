import bgImage from "@/public/images/socials-bg.jpg";
import instaImage from "@/public/images/insta.jpg";
import facebookImage from "@/public/images/insta.jpg"; // Ensure the correct image is used
import tiktokImage from "@/public/images/insta.jpg"; // Ensure the correct image is used
import instaIcon from "@/public/icons/instagram.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import Image from "next/image";

const Socials = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="container !mt-0 pt-12">
          <h2 className="text-6xl font-bold">Find Us On Socials</h2>
          <div className="mt-12 w-1/2 grid grid-cols-3 gap-4 ms-12">
            <div className="col-span-2">
              <div className="-space-y-8">
                <div className="w-56 bg-ui-white shadow-lg relative">
                  <Image
                    width={224}
                    height={400}
                    src={instaImage.src}
                    alt="Instagram"
                    className="rounded-xl"
                  />
                  <div className="absolute -top-4 -right-4">
                    <Image
                      className="w-10"
                      width={96}
                      height={96}
                      src={instaIcon.src}
                      alt="Instagram icon"
                    />
                  </div>
                </div>
                <div className="relative left-1/3 -top-12">
                  <div className="w-56 bg-ui-white shadow-lg relative">
                    <Image
                      width={224}
                      height={400}
                      src={facebookImage.src}
                      alt="Facebook"
                      className="rounded-xl"
                    />
                    <div className="absolute -top-4 -right-4">
                      <Image
                        className="w-10"
                        width={96}
                        height={96}
                        src={facebookIcon.src}
                        alt="Facebook icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-56 bg-ui-white shadow-lg relative">
                <Image
                  width={224}
                  height={400}
                  src={tiktokImage.src}
                  alt="TikTok"
                  className="rounded-xl h-96 object-cover"
                />
                <div className="absolute -top-4 -right-4">
                  <Image
                    className="w-10"
                    width={96}
                    height={96}
                    src={tiktokIcon.src}
                    alt="TikTok icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden">
        <h2 className="text-6xl font-bold">Find Us On Socials</h2>
      </section>
    </>
  );
};

export default Socials;
