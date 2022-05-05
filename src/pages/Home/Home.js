import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MobileNavHeader from "../../Components/NavHeader/MobileNavHeader";
import NavHeader from "../../Components/NavHeader/NavHeader";
import DesktopNavResponsive from "../../HOC/DesktopNavResponsive";
import MobileNavReponsive from "../../HOC/MobileNavReponsive";

export default function Home() {
  return (
    <div>
      <DesktopNavResponsive>
        <NavHeader />
      </DesktopNavResponsive>
      <MobileNavReponsive>
        <MobileNavHeader />
      </MobileNavReponsive>
      <SearchBar />
    </div>
  );
}
