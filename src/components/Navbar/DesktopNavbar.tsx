import Logo from "../Logo/Logo";
import NavbarLinks from "./NavbarLinks";

function DesktopNavbar() {
  return (
    <nav className="bg-slate-300 hidden lg:block grid-rows-[200px_1fr] drop-shadow-lg">
      <Logo />
      <NavbarLinks />
    </nav>
  );
}
export default DesktopNavbar;
