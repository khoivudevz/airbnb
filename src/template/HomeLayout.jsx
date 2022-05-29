import React from "react";
import Footer from "../Components/Footer/Footer";
import HomeMobileNavHeader from "../Components/NavHeader/HomeMobileNavHeader";
import HomeNavHeader from "../Components/NavHeader/HomeNavHeader";
import DesktopNavResponsive from "../HOC/DesktopNavResponsive";
import MobileNavReponsive from "../HOC/MobileNavReponsive";

export default function HomeLayout({ Components }) {
  return (
    <>
      <DesktopNavResponsive>
        <HomeNavHeader />
      </DesktopNavResponsive>
      <MobileNavReponsive>
        <HomeMobileNavHeader />
      </MobileNavReponsive>
      <Components />
      <Footer />
    </>
  );
}
