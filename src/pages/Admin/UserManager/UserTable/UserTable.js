import React from "react";
import { Table, Tag, Space } from "antd";
import Swal from "sweetalert2";
import { BsGearWide } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import UpdateInfor from "./UpdateForm/UpdateInfor";
import { userManageServices } from "../../../../services/userMangeServices";

export default function UserTable({ userList }) {
  const { Column } = Table;
  const handleDeleteUser = (id) => {
    userManageServices
      .deleteUser(id)
      .then((res) => {
        Swal.fire("Xóa thành công!", "Tiến hành tải lại trang!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Table dataSource={userList}>
      <Column title="ID" dataIndex="_id" key="_id" />
      <Column title="Tên" dataIndex="name" key="name" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="SĐT" dataIndex="phone" key="phone" />
      <Column
        title="Role"
        dataIndex="type"
        key="type"
        render={(text, record) =>
          record.type === "ADMIN" ? (
            <Tag color="red">ADMIN</Tag>
          ) : (
            <Tag color="green">CLIENT</Tag>
          )
        }
      />
      <Column
        title={<BsGearWide />}
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <button>
              <UpdateInfor data={record} id={record._id} />
            </button>
            <button
              onClick={() => {
                handleDeleteUser(record._id);
              }}
              className="bg-deepblue text-white  px-4 py-2 rounded-full"
            >
              <TiDelete size={20} />
            </button>
          </Space>
        )}
      />
    </Table>
  );
}
