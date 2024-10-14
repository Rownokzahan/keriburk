import Image from "next/image";

const Logo = () => {
  return (
    <figure>
      <Image
        width={200}
        height={100}
        className="w-16 md:w-28"
        src="/images/logo.png"
        alt="logo"
      />
    </figure>
  );
};

export default Logo;
