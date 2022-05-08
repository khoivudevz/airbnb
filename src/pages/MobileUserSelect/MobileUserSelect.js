import React from "react";
import { GrUserSettings, GrLogout } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { removeUserInfor } from "../../reducers/userSlice";
import { localStorageServices } from "../../services/localStorageServices";

export default function MobileUserSelect() {
  const dispatch = useDispatch();
  let handleLogOut = () => {
    localStorageServices.removeUserInfor();
    dispatch(removeUserInfor());
    Swal.fire("Đăng xuất", "Đã đăng xuất thành công!", "success");
  };
  return (
    <div className="container mx-auto fontFace">
      <div className="flex flex-col items-center justify-center my-32 text-xl space-y-10">
        <Link to="/user">
          <div className="flex items-center justify-center space-x-3">
            <GrUserSettings size={25} />
            <p>Thông tin cá nhân</p>
          </div>
        </Link>

        <div
          className="flex items-center justify-center cursor-pointer space-x-3"
          onClick={handleLogOut}
        >
          <GrLogout size={25} />
          <p>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}
