import bgImage from "@/public/images/socials-bg.jpg";
import instaImage from "@/public/images/insta.jpg";
import facebookImage from "@/public/images/insta.jpg";
import tiktokImage from "@/public/images/insta.jpg";
import instaIcon from "@/public/icons/instagram.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import Image from "next/image";

const Socials = () => {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-left hidden sm:block"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <div className="container !mt-0 py-12">
          <h2 className="mb-12 text-5xl font-bold">Find Us On Socials</h2>
          <div className="flex items-center">
            <div className="w-52 me-[208px]">
              <div className="relative">
                <figure className="w-full aspect-[5/6] rounded-3xl shadow-lg overflow-hidden">
                  <Image
                    width={224}
                    height={400}
                    src={instaImage.src}
                    alt="Instagram"
                    className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
                  />
                </figure>

                <div className="absolute -top-4 -right-4">
                  <Image
                    className="w-12 rounded-full"
                    width={96}
                    height={96}
                    src={instaIcon.src}
                    alt="Instagram icon"
                  />
                </div>
              </div>

              <div className="w-full ms-[80%] -mt-16 relative">
                <figure className="w-full aspect-[5/6] rounded-3xl shadow-lg overflow-hidden">
                  <Image
                    width={224}
                    height={400}
                    src={facebookImage.src}
                    alt="Facebook"
                    className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
                  />
                </figure>

                <div className="absolute -top-4 -right-4">
                  <Image
                    className="w-12"
                    width={96}
                    height={96}
                    src={facebookIcon.src}
                    alt="Facebook icon"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <figure className="w-52 aspect-[3/5] rounded-3xl shadow-lg overflow-hidden">
                <Image
                  width={224}
                  height={400}
                  src={tiktokImage.src}
                  alt="TikTok"
                  className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
                />
              </figure>

              <div className="absolute -top-4 -right-4">
                <Image
                  className="w-12"
                  width={96}
                  height={96}
                  src={tiktokIcon.src}
                  alt="TikTok icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:hidden">
        <h2 className="text-6xl font-bold">Find Us On Socials</h2>
      </section>
    </>
  );
};

export default Socials;
