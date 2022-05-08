import React from "react";
import { BiMenu } from "react-icons/bi";
import { Avatar } from "antd";
import { Menu, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GrUserSettings } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { localStorageServices } from "../../services/localStorageServices";
import { removeUserInfor } from "../../reducers/userSlice";

export default function UserNavHeaderLogin() {
  let dispatch = useDispatch();

  let userInfor = useSelector((state) => state.userSlice.userInfor);
  let userAvatar = useSelector((state) => state.userSlice.avatar);
  let handleLogOut = () => {
    localStorageServices.removeUserInfor();
    dispatch(removeUserInfor());
    Swal.fire("Đăng xuất", "Đã đăng xuất thành công!", "success");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <p className="fontFace cursor-default">
              Xin chào,{"  "}
              <span className="font-bold">
                {userInfor.name.length > 6
                  ? userInfor.name.slice(0, 6)
                  : userInfor.name}
              </span>
            </p>
          ),
          key: "0",
        },
        {
          label: (
            <Link to="/user">
              <div className="fontFace flex items-center justify-center space-x-2">
                <GrUserSettings /> <p>Cài đặt tài khoản</p>
              </div>
            </Link>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <div
              onClick={handleLogOut}
              className="fontFace flex items-center justify-start space-x-2"
            >
              <FiLogOut /> <p>Đăng xuất</p>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <button className="bg-white w-[77px] h-[42px] rounded-full flex items-center justify-center space-x-2">
              <BiMenu color="grey" size={20} />
              <Avatar
                src={
                  userAvatar ? userAvatar : "https://joeschmoe.io/api/v1/random"
                }
              />
            </button>
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
