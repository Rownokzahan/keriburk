import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

const Logo = ({ size = "large", position = "left" }) => {
  const sizes = {
    small: "w-[85px]",
    large: "w-24",
  };

  const positions = {
    left: "",
    center: "mx-auto",
    right: "ms-auto",
  };

  return (
    <Link href={"/"}>
      <figure>
        <Image
          width={113}
          height={59}
          className={`${sizes[size]} ${positions[position]}`}
          src={logo.src}
          alt="logo"
        />
      </figure>
    </Link>
  );
};

export default Logo;
