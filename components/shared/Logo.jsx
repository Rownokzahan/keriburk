import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        width={200}
        height={100}
        className="w-28"
        src="/images/logo.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
