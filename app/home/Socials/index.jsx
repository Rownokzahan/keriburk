import SocialsDesktop from "./SocialsDesktop";
import SocialsMobile from "./SocialsMobile";

const Socials = () => {
  return (
    <>
      <section className="hidden sm:block">
        <SocialsDesktop />
      </section>

      <section className="sm:hidden">
        <SocialsMobile />
      </section>
    </>
  );
};

export default Socials;
