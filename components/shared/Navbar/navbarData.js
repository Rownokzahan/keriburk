import { PiMagnifyingGlass, PiShoppingCartSimpleLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

export const navLinksData = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/about", label: "About Us" },
  { id: 3, url: "/products", label: "Products" },
  { id: 4, url: "/recipes", label: "Recipes" },
  { id: 5, url: "/blogs", label: "Blogs" },
  { id: 6, url: "/contact", label: "Contact" },
];

export const iconLinksData = [
  { id: 1, url: "/", Icon: PiMagnifyingGlass },
  { id: 2, url: "/profile", Icon: FiUser },
  { id: 3, url: "/cart", Icon: PiShoppingCartSimpleLight },
];
