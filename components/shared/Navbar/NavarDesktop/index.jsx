"use client"; // Enables client-side rendering in Next.js

import Link from "next/link";
import Logo from "../../Logo";
import { usePathname } from "next/navigation";
import { iconLinksData, navLinksData } from "../navbarData";

const NavarDesktop = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-2 container !mt-0">
      <Logo />

      {/* Navigation menu */}
      <div>
        <ul className="flex items-center space-x-4">
          {navLinksData.map((link) => (
            <li key={link?.id}>
              {/* Conditionally applying active class based on current path */}
              <Link
                href={link?.url}
                className={`${
                  pathname === link.url
                    ? "text-black" // Active link style
                    : "text-ui-gray" // Inactive link style
                }`}
              >
                {link?.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Icon links */}
      <div className="flex items-center space-x-4 text-ui-gray">
        {iconLinksData.map((link) => (
          <Link key={link?.id} href={link.url}>
            <link.Icon /> {/* Rendering the icon for each link */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavarDesktop;
