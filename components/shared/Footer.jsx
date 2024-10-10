import Link from "next/link";
import bgImage from "../../public/images/footer-bg.jpg";
import Logo from "./Logo";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiFacebookFill, RiTiktokLine } from "react-icons/ri";

// Reusable Footer Link Group Component
const FooterLinkGroup = ({ title, links }) => (
  <div className="space-y-2">
    <h5 className="font-semibold">{title}</h5>
    <ul className="text-sm list-none space-y-1">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const companyLinks = [
    { label: "About Us", href: "" },
    { label: "Contact Us", href: "" },
    { label: "Recipes", href: "" },
    { label: "Blog", href: "" },
  ];

  const shopLinks = [
    { label: "About Us", href: "" },
    { label: "Products", href: "" },
  ];

  const supportLinks = [
    { label: "Terms & Condition", href: "" },
    { label: "Refund Policy", href: "" },
    { label: "Terms of Service", href: "" },
    { label: "Privacy Policy", href: "" },
    { label: "Shipping Policy", href: "" },
    { label: "Payment Policy", href: "" },
  ];

  const socialLinks = [
    { href: "", Icon: FaInstagram },
    { href: "", Icon: FaLinkedin },
    { href: "", Icon: RiFacebookFill },
    { href: "", Icon: FaYoutube },
    { href: "", Icon: RiTiktokLine },
    { href: "", Icon: FaWhatsapp },
  ];

  return (
    <footer>
      <section
        className="px-6 py-12 bg-cover bg-no-repeat bg-ui-white bg-opacity-5 bg-blend-overlay text-ui-white flex flex-wrap gap-12 sm:justify-center"
        style={{ backgroundImage: `url('${bgImage.src}')` }}
      >
        <Logo />

        <div className="flex gap-12">
          <div className="space-y-4">
            <FooterLinkGroup title="Company" links={companyLinks} />
            <FooterLinkGroup title="Shop" links={shopLinks} />
          </div>

          <FooterLinkGroup title="Support" links={supportLinks} />
        </div>

        <div className="space-y-2 text-sm">
          <h5 className="font-semibold text-base">Contact Us</h5>
          <p>Dhaka, Bangladesh</p>
          <hr />
          <p>
            <span>Phone:</span> <span>+8801330208560</span>
          </p>
          <p className="flex flex-col">
            <span>Email:</span> <span>care@keriburk.com</span>
          </p>
          <p className="flex flex-col">
            <span>For Expert Enquiry:</span> <span>care@keriburk.com</span>
          </p>
        </div>

        <div className="space-y-2">
          <h5 className="font-semibold">To Connect</h5>
          <div className="flex gap-3 items-center">
            {socialLinks.map(({ href, Icon }, idx) => (
              <a key={idx} href={href} className="text-lg">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-ui-green text-ui-white text-sm text-center">
        <p className="italic">All right reserved to keriburk.com</p>
      </section>
    </footer>
  );
};

export default Footer;
