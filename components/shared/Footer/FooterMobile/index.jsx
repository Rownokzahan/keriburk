"use client";

import { useState } from "react";
import Link from "next/link";
import {
  companyLinks,
  socialLinks,
  supportLinks,
} from "../footerData";
import { FiChevronDown, FiChevronUp, FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../../Logo";

const AccordionSection = ({ title, children, isOpen, toggle }) => {
  return (
    <div className="border-b border-ui-white -mt-px">
      <div
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer py-2"
      >
        <h5 className="font-semibold text-base">{title}</h5>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      {isOpen && (
        <div className="p-3 bg-ui-green bg-opacity-60 border-t">{children}</div>
      )}
    </div>
  );
};

const FooterMobile = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="pb-5 container text-ui-white">
      <div className="flex justify-center mb-4">
        <Logo />
      </div>

      <AccordionSection
        title="Contact Us"
        isOpen={openSection === "contact"}
        toggle={() => toggleSection("contact")}
      >
        <div className="text-sm space-y-4">
          <div className="space-y-2">
            <p className="flex items-center gap-1">
              <FiMapPin /> <span>Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center gap-1">
              <IoCallOutline /> <span>+880 1330208560</span>
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineEmail /> <span>care@keriburk.com</span>
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Socials</h4>
            <div className="flex gap-3 items-center ms-2">
              {socialLinks.map(({ href, Icon }, idx) => (
                <a key={idx} href={href} className="text-lg">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection
        title="Company"
        isOpen={openSection === "company"}
        toggle={() => toggleSection("company")}
      >
        <ul className="text-sm list-none space-y-1">
          {companyLinks?.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </AccordionSection>

      <AccordionSection
        title="Support"
        isOpen={openSection === "support"}
        toggle={() => toggleSection("support")}
      >
        <ul className="text-sm list-none space-y-1">
          {supportLinks?.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </AccordionSection>
    </div>
  );
};

export default FooterMobile;
