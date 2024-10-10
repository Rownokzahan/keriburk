"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";
import { PiMagnifyingGlass, PiShoppingCartSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

export function NavarDesktop() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-2 container !mt-0">
      <Logo />

      <nav>
        <ul className="flex items-center space-x-4 font-medium text-ui-black-light">
          <li>
            <Link
              className={`link ${pathname === "/" ? "text-ui-black" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === "/about" ? "text-ui-black" : ""}`}
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/products" ? "text-ui-black" : ""
              }`}
              href="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/recipes" ? "text-ui-black" : ""
              }`}
              href="/recipes"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === "/blogs" ? "text-ui-black" : ""}`}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/contact" ? "text-ui-black" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 text-ui-black-light">
        <Link href="/">
          <PiMagnifyingGlass />
        </Link>
        <Link href="/">
          <FiUser />
        </Link>
        <Link href="/">
          <PiShoppingCartSimpleLight />
        </Link>
      </div>
    </div>
  );
}
