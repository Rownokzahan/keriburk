import Image from "next/image";

const Logo = ({ size = "large", position = "left" }) => {
  const sizes = {
    small: "w-12",
    medium: "w-20",
    large: "w-28",
  };

  const positions = {
    left: "",
    center: "mx-auto",
    right: "ms-auto",
  };

  return (
    <figure>
      <Image
        width={200}
        height={100}
        className={`${sizes[size]} ${positions[position]}`}
        src="/images/logo.png"
        alt="logo"
      />
    </figure>
  );
};

export default Logo;
