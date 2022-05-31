import React from "react";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import { roomServices } from "../../../../services/roomServices";
import UpdateRoom from "../UpdateRoom/UpdateRoom";

export default function RoomTable({ data }) {
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
    <>
      <td className="hidden lg:flex lg:h-[263px] items-center justify-center">
        <div className="flex items-center justify-center">
          <p>{data?._id}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          <p>{data?.name}</p>
        </div>
      </td>
      <td>
        <img
          src={
            data?.image
              ? data?.image
              : "https://airbnb.cybersoft.edu.vn/public/temp/1636703587023_ve-dep-bien-nha-trang.jpg"
          }
          alt="image"
        />
      </td>
      <td className="flex h-[263px] items-center justify-center">
        <button>
          <UpdateRoom data={data} id={data._id} />
        </button>
        <button
          onClick={() => {
            handleDeleteRoom(data._id);
          }}
          className="bg-deepblue text-white  px-4 py-2 rounded-full"
        >
          <TiDelete size={20} />
        </button>
      </td>
    </>
  );
}
