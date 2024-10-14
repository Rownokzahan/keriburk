import Logo from "@/components/shared/Logo";
import {
  companyLinks,
  shopLinks,
  socialLinks,
  supportLinks,
} from "../footerData";
import LinkGroup from "./LinkGroup";

const FooterDesktop = () => {
  return (
    <div className="px-6 py-12 text-ui-white flex flex-wrap gap-12 justify-center">
      <Logo />

      <div className="flex gap-12">
        <LinkGroup title="Company" links={companyLinks} />
        <LinkGroup title="Support" links={supportLinks} />
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
      </div>

      <div className="space-y-2">
        <h5 className="font-semibold">Socials</h5>
        <div className="flex gap-3 items-center">
          {socialLinks.map(({ href, Icon }, idx) => (
            <a key={idx} href={href} className="text-lg">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
