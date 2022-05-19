import React from "react";
import Swal from "sweetalert2";
import { Table, Tag, Space } from "antd";
import { BsGearWide } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import UpdateLocation from "../UpdateLocation/UpdateLocation";
import { locationServices } from "../../../../services/locationServices";
export default function LocationTable({ data }) {
  const { Column } = Table;

  const handleDeleteLocation = (id) => {
    locationServices
      .deleteLocation(id)
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
      <Column title="Tên địa điểm" dataIndex="name" key="name" />
      <Column
        title="Hình ảnh"
        dataIndex={data?.image}
        render={(text, record) => {
          return (
            <img
              src={
                record.image
                  ? record.image
                  : "https://airbnb.cybersoft.edu.vn/public/temp/1640847466030_long%20hai.jpg"
              }
              alt={record.name}
              className="w-[400px] h-[250px]"
            />
          );
        }}
      />

      <Column
        title={<BsGearWide />}
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <button>
              <UpdateLocation data={record} id={record._id} />
            </button>
            <button
              onClick={() => {
                handleDeleteLocation(record._id);
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
