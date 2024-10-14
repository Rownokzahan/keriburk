import Link from "next/link";
import Logo from "../../Logo";
import { LuMenu } from "react-icons/lu";
import Sidebar from "./Sidebar";
import { iconLinksData } from "../navbarData";

const NavbarMobile = () => {
  return (
    <>
      <div className="fixed border-b top-0 z-50 bg-ui-white grid grid-cols-3 items-center justify-between py-2 container !mt-0">
        <button className="text-xl text-ui-black-light">
          <LuMenu />
        </button>

        <div className="mx-auto">
          <Logo />
        </div>

        {/* Icon links */}
        <div className="flex justify-end items-center space-x-4">
          {iconLinksData.map((link, index) => (
            <Link key={index} href={link.href}>
              <link.Icon /> {/* Rendering the icon for each link */}
            </Link>
          ))}
        </div>
      </div>

      {/* <Sidebar /> */}
    </>
  );
};

export default NavbarMobile;
