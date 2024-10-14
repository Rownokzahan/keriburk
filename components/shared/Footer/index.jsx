import bgImage from "@/public/images/footer-bg.jpg";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <footer>
      <section
        className="hidden sm:block bg-cover bg-no-repeat bg-ui-white bg-opacity-5 bg-blend-overlay"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <FooterDesktop />
      </section>

      <section
        className="sm:hidden bg-cover bg-ui-green"
      >
        <FooterMobile />
      </section>

      <section className="py-4 bg-ui-green text-ui-white text-sm text-center">
        <p className="italic">All right reserved to keriburk.com</p>
      </section>
    </footer>
  );
};

export default Footer;
