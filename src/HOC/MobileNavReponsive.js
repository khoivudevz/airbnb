import { useMediaQuery } from "react-responsive";

export default function MobileNavReponsive({ children }) {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  return isMobile ? children : null;
}
