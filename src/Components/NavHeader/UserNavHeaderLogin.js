import React from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { Avatar } from "antd";
import { Menu, Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { localStorageServices } from "../../services/localStorageServices";
import {
  removeAvatar,
  removeToken,
  removeUserInfor,
} from "../../reducers/userSlice";

export default function UserNavHeaderLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let userInfor = useSelector((state) => state.userSlice.userInfor);
  let userAvatar = useSelector((state) => state.userSlice.avatar);

  let handleLogOut = () => {
    dispatch(removeUserInfor());
    dispatch(removeToken());
    dispatch(removeAvatar());
    localStorageServices.removeUserInfor();
    localStorageServices.removeAVATAR();
    localStorageServices.removeToken();
    Swal.fire("Đăng xuất thành công", "Trở về trang chủ!", "success");
    navigate("/");
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
            <Link to={`/user/${userInfor._id}`}>
              <div className="fontFace flex items-center justify-start space-x-2">
                <GrUserSettings /> <p>Cài đặt tài khoản</p>
              </div>
            </Link>
          ),
          key: "1",
        },
        {
          label: (
            <Link to={`/booked/${userInfor._id}`}>
              <div className="fontFace flex items-center justify-center space-x-2">
                <MdOutlineMeetingRoom /> <p>Danh sách phòng đã đặt</p>
              </div>
            </Link>
          ),
          key: "2",
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
            <button className="bg-white hover:bg-hotpink hover:text-white transition-all w-[77px] h-[42px] rounded-full flex items-center justify-center space-x-2 shadow-xl">
              <BiMenu size={20} />
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
