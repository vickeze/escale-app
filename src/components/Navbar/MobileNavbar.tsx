import { useState } from "react";
import { Drawer, DrawerContent } from "../ui/drawer";
import MobileMenu from "./NavbarLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import SmallLogo from "../Logo/SmallLogo";

function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  function toggleMobileMenu() {
    setMobileMenuOpen((prev: boolean) => !prev);
  }
  return (
    <nav className="lg:hidden z-[100] bg-slate-300 grid grid-cols-3">
      <Drawer
        direction="top"
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
      >
        <div
          className="h-full flex items-center pl-2 "
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <XMarkIcon
              width={30}
              height={30}
              color="white"
              className="active:scale-90"
            />
          ) : (
            <Bars3Icon
              width={30}
              height={30}
              color="white"
              className="active:scale-90"
            />
          )}
        </div>
        <div
          className={`flex justify-center items-center transition-opacity duration-100 ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        >
          <SmallLogo />
        </div>
        <DrawerContent className="mt-[50px] focus-visible:outline-none">
          <MobileMenu close={() => setMobileMenuOpen(false)} />
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
export default MobileNavbar;
