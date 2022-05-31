import React from "react";
import UpdateInfor from "./UpdateForm/UpdateInfor";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import { userManageServices } from "../../../../services/userMangeServices";

export default function UserItem({ data }) {
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
    <>
      <td className="hidden lg:block">
        <div className="flex items-center justify-center">
          <p>{data?._id}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          <p>{data?.email}</p>
        </div>
      </td>
      <td className="flex items-center justify-center">
        <button>
          <UpdateInfor data={data} id={data._id} />
        </button>
        <button
          onClick={() => {
            handleDeleteUser(data._id);
          }}
          className="bg-deepblue text-white  px-4 py-2 rounded-full"
        >
          <TiDelete size={20} />
        </button>
      </td>
    </>
  );
}
