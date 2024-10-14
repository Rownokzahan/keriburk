import Image from "next/image";

const Logo = ({ size = "large" }) => {
  const sizes = {
    small: "w-12",
    medium: "w-18",
    large: "w-28",
  };

  return (
    <figure>
      <Image
        width={200}
        height={100}
        className={sizes[size]}
        src="/images/logo.png"
        alt="logo"
      />
    </figure>
  );
};

export default Logo;
