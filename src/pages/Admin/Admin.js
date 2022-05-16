import React from "react";
import { useSelector } from "react-redux";
import AdminHome from "./AdminHome/AdminHome";
import AdminLogin from "./AdminLogin";

export default function Admin() {
  let data = useSelector((state) => state.adminSlice.adminInfor);
  return <>{data ? <AdminHome /> : <AdminLogin />}</>;
}
