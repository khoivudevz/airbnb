import React from "react";
import Footer from "../Components/Footer/Footer";
import HomeMobileNavHeader from "../Components/NavHeader/HomeMobileNavHeader";
import NavHeader from "../Components/NavHeader/NavHeader";
import DesktopNavResponsive from "../HOC/DesktopNavResponsive";
import MobileNavReponsive from "../HOC/MobileNavReponsive";

export default function Layout({ Components }) {
  return (
    <>
      <DesktopNavResponsive>
        <NavHeader />
      </DesktopNavResponsive>
      <MobileNavReponsive>
        <HomeMobileNavHeader />
      </MobileNavReponsive>
      <Components />
      <Footer />
    </>
  );
}
