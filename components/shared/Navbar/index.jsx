import NavarDesktop from "./NavarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:block">
        <NavarDesktop />
      </nav>

      <nav className="md:hidden">
        <NavbarMobile />
      </nav>
    </>
  );
};

export default Navbar;