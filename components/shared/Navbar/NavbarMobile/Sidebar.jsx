"use client";

import { AiOutlineClose } from "react-icons/ai";
import { navLinksData, iconLinksData } from "../navbarData";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../Logo";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  // Handle disabling main page scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable main page scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when sidebar closes
    }

    // Cleanup on component unmount or when closing
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the sidebar on route change
  useEffect(() => {
    if (isOpen) {
      toggleSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-ui-white bg-opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 overflow-y-auto w-64 bg-ui-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } h-full z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Logo size="small" />

          {/* Close Button */}
          <button onClick={toggleSidebar} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4">
          {navLinksData.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`py-2 ${
                pathname === link.url
                  ? "text-black" // Active link style
                  : "text-ui-gray" // Inactive link style
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icon Links */}
        <div className="flex p-4 justify-around border-t">
          {iconLinksData.map((icon) => (
            <Link
              key={icon?.id}
              href={icon?.url}
              className="text-2xl text-ui-gray"
            >
              <icon.Icon />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
