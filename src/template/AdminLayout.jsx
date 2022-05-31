import React from "react";
import DesktopNavResponsive from "../HOC/DesktopNavResponsive";
import MobileNavReponsive from "../HOC/MobileNavReponsive";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import MobileAdminHome from "../pages/Admin/AdminHome/MobileAdminHome";

export default function AdminLayout() {
  return (
    <>
      <DesktopNavResponsive>
        <AdminHome />
      </DesktopNavResponsive>
      <MobileNavReponsive>
        <MobileAdminHome />
      </MobileNavReponsive>
    </>
  );
}
