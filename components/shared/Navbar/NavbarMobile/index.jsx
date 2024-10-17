"use client";

import Logo from "../../Logo";
import { LuMenu } from "react-icons/lu";
import Sidebar from "./Sidebar";
import { useState } from "react";

const NavbarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full px-4 py-3 border-b bg-ui-white flex items-center justify-between">
        <Logo size="small" />

        <button className="text-2xl" onClick={toggleSidebar}>
          <LuMenu />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavbarMobile;
