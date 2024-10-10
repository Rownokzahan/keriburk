import bgImage from "@/public/images/socials-bg.jpg";
import Image from "next/image";
import socialItems from "./socialItems";

const SocialsDesktop = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-left"
      style={{ backgroundImage: `url('${bgImage?.src}')` }}
    >
      <div className="container !mt-0 py-12">
        <h3 className="mb-12 text-5xl font-bold">Find Us On Socials</h3>
        <div className="flex items-center">
          <div className="w-52 me-[208px]">
            <div className="relative">
              <figure className="w-full aspect-[5/6] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  width={224}
                  height={400}
                  src={socialItems[0]?.image?.src}
                  alt={socialItems[0]?.image?.alt}
                  className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
                />
              </figure>

              <div className="absolute -top-4 -right-4">
                <Image
                  className="w-12 rounded-full"
                  width={96}
                  height={96}
                  src={socialItems[0]?.icon?.src}
                  alt={socialItems[0]?.icon?.alt}
                />
              </div>
            </div>

            <div className="w-full ms-[80%] -mt-16 relative">
              <figure className="w-full aspect-[5/6] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  width={224}
                  height={400}
                  src={socialItems[1]?.image?.src}
                  alt={socialItems[1]?.image?.alt}
                  className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
                />
              </figure>

              <div className="absolute -top-4 -right-4">
                <Image
                  className="w-12"
                  width={96}
                  height={96}
                  src={socialItems[1]?.icon?.src}
                  alt={socialItems[1]?.icon?.alt}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <figure className="w-52 aspect-[3/5] rounded-3xl shadow-2xl overflow-hidden">
              <Image
                width={224}
                height={400}
                src={socialItems[2]?.image?.src}
                alt={socialItems[2]?.image?.alt}
                className="w-full h-full rounded-3xl object-cover hover:scale-110 duration-1000"
              />
            </figure>

            <div className="absolute -top-4 -right-4">
              <Image
                className="w-12"
                width={96}
                height={96}
                src={socialItems[2]?.icon?.src}
                alt={socialItems[2]?.icon?.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsDesktop;
