import React from "react";
import { BiMenu } from "react-icons/bi";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export default function UserNavHeader() {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to="/signup">
              <p className="fontFace font-bold">Đăng ký</p>
            </Link>
          ),
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: (
            <Link to="/login">
              <p className="fontFace font-bold">Đăng nhập</p>
            </Link>
          ),
          key: "1",
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
              <Avatar icon={<UserOutlined />} />
            </button>
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
