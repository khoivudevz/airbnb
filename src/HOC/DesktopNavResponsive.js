import { useMediaQuery } from "react-responsive";

export default function DesktopNavResponsive({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
}
