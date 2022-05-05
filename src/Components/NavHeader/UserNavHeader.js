import React from "react";
import { BiMenu } from "react-icons/bi";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";
import { Avatar } from "antd";

const menu = (
  <Menu
    items={[
      {
        label: <p className="fontFace font-bold">Đăng ký</p>,
        key: "0",
      },
      {
        label: <p className="fontFace">Đăng nhập</p>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: <p className="fontFace">Cho thuê nhà</p>,
        key: "2",
      },
      {
        label: <p className="fontFace">Tổ chức trải nghiệm</p>,
        key: "3",
      },
      {
        label: <p className="fontFace">Trợ giúp</p>,
        key: "4",
      },
    ]}
  />
);

export default function UserNavHeader() {
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
