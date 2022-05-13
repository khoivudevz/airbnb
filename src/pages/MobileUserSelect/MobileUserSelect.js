import React from "react";
import { GrUserSettings, GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMeetingRoom } from "react-icons/md";
import Swal from "sweetalert2";
import { removeUserInfor } from "../../reducers/userSlice";
import { localStorageServices } from "../../services/localStorageServices";

export default function MobileUserSelect() {
  let userInfor = useSelector((state) => state.userSlice.userInfor);

  let navigate = useNavigate();

  const dispatch = useDispatch();
  let handleLogOut = () => {
    localStorageServices.removeUserInfor();
    localStorageServices.removeToken();
    localStorageServices.removeAVATAR();
    dispatch(removeUserInfor());
    Swal.fire("Đăng xuất thành công", "Trở về trang chủ!", "success");
    navigate("/");
  };
  return (
    <div className="container mx-auto fontFace">
      <div className="flex flex-col items-center justify-center my-32 text-xl space-y-10">
        <Link to={`/user/${userInfor._id}`}>
          <div className="flex items-center justify-center space-x-3">
            <GrUserSettings size={25} />
            <p>Thông tin cá nhân</p>
          </div>
        </Link>
        <Link to={`/booked/${userInfor._id}`}>
          <div className="flex items-center justify-center space-x-3">
            <MdOutlineMeetingRoom size={25} />
            <p>Danh sách phòng đã đặt</p>
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
