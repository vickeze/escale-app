import { Link } from "react-router-dom";
import { navbarItems } from "./constants/NavbarItems";

interface NavbarLinksProps {
  close?: () => void;
}
export default function NavbarLinks({ close }: NavbarLinksProps) {
  return (
    <ul className="flex flex-col items-center mb-9 lg:gap-3">
      {navbarItems.map((item, index) => (
        <li
          key={index}
          className=" hover:backdrop-brightness-95 w-full text-center"
        >
          <Link
            to={item.link}
            onClick={close}
            className="block h-full w-full text-center px-3 py-2"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
