import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { MdOutlineVerifiedUser, MdOutlineCheck, MdStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import { userManageServices } from "../../services/userMangeServices";
import { setUserAvatar } from "../../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
export default function DetailUser() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const userAvatar = useSelector((state) => state.userSlice.avatar);
  const [data, setData] = useState(null);
  useEffect(() => {
    userManageServices
      .getDetailsUser(id)
      .then((res) => {
        setData(res.data);
        if (res.data.avatar) {
          dispatch(setUserAvatar(res.data.avatar));
        } else {
          dispatch(setUserAvatar(null));
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="container mx-auto my-32 fontFace">
      <div className="flex space-x-20">
        <div className="border-2 border-gray w-[300px] rounded-lg py-10">
          <div className="flex flex-col items-center justify-center">
            <Avatar
              src={
                userAvatar ? userAvatar : "https://joeschmoe.io/api/v1/random"
              }
              size={150}
            />
            <p className="mt-2">Cập nhật ảnh đại diện</p>
          </div>
          <MdOutlineVerifiedUser className="ml-5 my-5" size={30} />
          <div className="flex flex-col items-start justify-center ml-5">
            <p className="font-bold text-lg">Xác minh danh tính</p>
            <p> Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
            <button className="rounded-2xl border-2 border-black px-7 py-3 font-bold mt-5 hover:bg-black hover:text-white transition-all">
              Nhận huy hiệu
            </button>
            <div className="flex items-start justify-center my-5 border-t-2 border-gray">
              <p className="font-bold my-5">{data?.email} đã xác thực</p>
            </div>
            <div className="flex items-center space-x-3">
              <MdOutlineCheck size={20} />
              <p>Địa chỉ email</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10">
          <p className="font-bold text-2xl">Xin chào, tôi là {data?.name}</p>
          <p className="text-sm mt-5">Bắt đầu tham gia vào 2022</p>
          <div className="flex items-center mt-10">
            <MdStar size={30} />
            <p className="font-bold text-xl">0 đánh giá</p>
          </div>
          <div className="border-y-2 border-grey my-10 py-10">
            <p className="font-bold underline"> Đánh giá của bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
