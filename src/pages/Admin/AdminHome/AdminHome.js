import React, { useEffect, useState } from "react";
import { Avatar, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Space } from "antd";
import { FiLogOut } from "react-icons/fi";
import { localStorageServices } from "../../../services/localStorageServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  removeAdminAvatar,
  removeAdminInfor,
  removeAdminToken,
} from "../../../reducers/adminSlice";
import RoomManager from "../../Admin/RoomManager/RoomManager";
import UserManager from "../UserManager/UserManager";
const { TabPane } = Tabs;
export default function AdminHome() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let adminInfor = useSelector((state) => state.adminSlice.adminInfor);
  let adminAvatar = useSelector((state) => state.adminSlice.adminAvatar);

  useEffect(() => {
    if (adminInfor.type !== "ADMIN") {
      dispatch(removeAdminInfor());
      localStorageServices.removeAdminInfor();
      dispatch(removeAdminToken());
      localStorageServices.removeAminToken();
      dispatch(removeAdminAvatar());
      Swal.fire(
        "Tài khoản không đủ thẩm quyền",
        "Trở về trang đăng nhập!",
        "error"
      );
      navigate("/admin");
    }
  }, []);

  function callback(key) {
    // console.log(key);
  }

  let handleLogOut = () => {
    localStorageServices.removeAdminInfor();
    localStorageServices.removeAVATAR();
    localStorageServices.removeAminToken();
    dispatch(removeAdminInfor());
    dispatch(removeAdminAvatar());
    dispatch(removeAdminToken());
    Swal.fire("Đăng xuất thành công", "Trở về trang đăng nhập!", "success");
    navigate("/admin");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              onClick={handleLogOut}
              className="fontFace flex items-center justify-start space-x-2"
            >
              <FiLogOut /> <p>Đăng xuất</p>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className="h-screen">
      <div className="h-[10%] shadow-xl bg-deepblue">
        <div className="w-full h-full container mx-auto flex items-center justify-end space-x-3 ">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p className="fontFace text-white">{adminInfor?.email}</p>{" "}
                {adminAvatar ? (
                  <Avatar size={38} src={adminAvatar} />
                ) : (
                  <Avatar size={38} icon={<UserOutlined />} />
                )}
              </Space>
            </a>
          </Dropdown>
        </div>
        <div></div>
      </div>
      <div className="h-[90%] py-20">
        <Tabs onChange={callback} type="card" tabPosition="left">
          <TabPane tab="Quản lý người dùng" key="1">
            <UserManager />
          </TabPane>
          <TabPane tab="Quản lý thông tin vị trí" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Quản lý thông tin phòng" key="3">
            <RoomManager />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
