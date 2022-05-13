import React, { useEffect, useState } from "react";
import { Avatar, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Space } from "antd";
import { FiLogOut } from "react-icons/fi";
import { localStorageServices } from "../../services/localStorageServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { removeAdminInfor } from "../../reducers/adminSlice";
import SignupAdmin from "./SignupAdmin";
import UserList from "./UserList";
const { TabPane } = Tabs;
export default function UserManager() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let adminInfor = useSelector((state) => state.adminSlice.adminInfor);
  const [usersData, setUsersData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);

  useEffect(() => {
    if (adminInfor.type !== "ADMIN") {
      dispatch(removeAdminInfor());
      localStorageServices.removeAdminInfor();
      localStorageServices.removeAminToken();
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
    dispatch(removeAdminInfor());
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
                <Avatar size={38} icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div></div>
      </div>
      <div className="h-[90%] py-20">
        <Tabs onChange={callback} type="card" tabPosition="left">
          <TabPane tab="Quản lý người dùng" key="1">
            <SignupAdmin />
            <UserList />
          </TabPane>
          <TabPane tab="Quản lý thông tin vị trí" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Quản lý thông tin phòng" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
