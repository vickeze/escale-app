import { Link } from "react-router-dom";
import Logo from "../../../public/logo.svg?react";
interface SmallLogoProps {
  height?: number;
  width?: number;
}
function SmallLogo({ height, width }: SmallLogoProps) {
  return (
    <Link to="/">
      <Logo
        height={height ?? 35}
        width={width ?? 35}
        className="active:scale-95 hover:scale-95"
      />
    </Link>
  );
}
export default SmallLogo;
