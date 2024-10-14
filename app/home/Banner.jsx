import bgImage from "@/public/images/Hero-image-1.jpg";

const Banner = () => {
  return (
    <section>
      <img src={bgImage.src} alt="Banner Image" className="h-screen w-full object-cover" />
    </section>
  );
};

export default Banner;
