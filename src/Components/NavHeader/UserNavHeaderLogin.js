import React from "react";
import { BiMenu } from "react-icons/bi";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { localStorageServices } from "../../services/localStorageServices";

export default function UserNavHeaderLogin() {
  let dispatch = useDispatch();

  let userInfor = useSelector((state) => state.userSlice.userInfor);
  let userAvatar = useSelector((state) => state.userSlice.avatar);

  return (
    <>
      <button className="bg-white w-[77px] h-[42px] rounded-full flex items-center justify-center space-x-2">
        <BiMenu color="grey" size={20} />
        <Avatar
          src={userAvatar ? userAvatar : "https://joeschmoe.io/api/v1/random"}
        />
      </button>
    </>
  );
}
