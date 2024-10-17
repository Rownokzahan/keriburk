import bgImage from "@/public/images/socials-bg.jpg";
import Image from "next/image";
import socialItems from "./socialItems";
import clsx from "clsx";

const SocialsDesktop = () => {
  return (
    <div
      className="h-screen container bg-cover bg-left"
      style={{ backgroundImage: `url('${bgImage?.src}')` }}
    >
      <div className="py-16">
        <h3 className="mb-12 text-5xl font-bold">Find Us On Socials</h3>
        <div className="max-w-max h-full grid grid-cols-2 gap-y-10 gap-x-16">
          {socialItems.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "relative w-60 aspect-[5/4] border border-ui-white rounded-3xl", // Common classes for the figure
                index === 2 && "left-8", // Conditional left positioning for 3rd item
                index === 3 && "left-8"
              )}

              style={{ boxShadow: "4px 4px 12px 8px rgba(0,0,0,0.1),-4px -4px 12px 8px rgba(0,0,0,0.1)" }}
            >
              {/* Social Image */}
              <figure className="w-full h-full rounded-3xl overflow-hidden">
                <Image
                  width={224}
                  height={400}
                  src={item?.image?.src}
                  alt={item?.image?.alt}
                  className="w-full h-full object-cover hover:scale-110 duration-1000"
                />
              </figure>

              {/* Social Icon */}
              <div
                className={clsx(
                  "absolute w-12 rounded-full",
                  "-top-4", // Top positioning for all icons
                  index === 0 && "-left-4",
                  index === 1 && "-left-4",
                  index === 2 && "-left-4",
                  index === 3 && "-left-4"
                )}
              >
                <Image
                  width={96}
                  height={96}
                  src={item?.icon?.src}
                  alt={item?.icon?.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialsDesktop;
