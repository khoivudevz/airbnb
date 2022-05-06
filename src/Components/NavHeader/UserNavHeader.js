import React from "react";
import { BiMenu } from "react-icons/bi";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export default function UserNavHeader() {
  return (
    <>
      <button className="bg-white w-[77px] h-[42px] rounded-full flex items-center justify-center space-x-2">
        <BiMenu color="grey" size={20} />
        <Avatar icon={<UserOutlined />} />
      </button>
    </>
  );
}
