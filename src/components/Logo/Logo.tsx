import { Link } from "react-router-dom";
import LogoSvg from "../../../public/logo.svg?react";
interface SmallLogoProps {
  height?: number;
  width?: number;
}
function Logo({ height, width }: SmallLogoProps) {
  return (
    <Link
      to="/"
      className="flex justify-center items-center gap-3 py-5 active:scale-95 hover:scale-95"
    >
      <LogoSvg height={height ?? 50} width={width ?? 50} className="" />
      <h1 className="text-5xl ">E-scale</h1>
    </Link>
  );
}
export default Logo;
