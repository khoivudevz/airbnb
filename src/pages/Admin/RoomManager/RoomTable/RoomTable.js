import React from "react";
import { Table, Tag, Space } from "antd";
import Swal from "sweetalert2";
import { BsGearWide } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { roomServices } from "../../../../services/roomServices";
import UpdateRoom from "../UpdateRoom/UpdateRoom";
export default function RoomTable({ data }) {
  const { Column } = Table;

  const handleDeleteRoom = (id) => {
    roomServices
      .deleteRoom(id)
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
    <Table dataSource={data}>
      <Column title="ID" dataIndex="_id" key="_id" />
      <Column title="Tên phòng" dataIndex="name" key="name" />
      <Column
        title="Hình ảnh"
        dataIndex={data?.image}
        render={(text, record) => {
          return (
            <img
              src={
                record.image
                  ? record.image
                  : "https://airbnb.cybersoft.edu.vn/public/images/room/1634308467196_camtienhotel.jpg"
              }
              alt={record.name}
            />
          );
        }}
      />
      <Column title="GuessMax" dataIndex="guests" key="guests" />

      <Column
        title={<BsGearWide />}
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <button>
              <UpdateRoom data={record} id={record._id} />
            </button>
            <button
              onClick={() => {
                handleDeleteRoom(record._id);
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
