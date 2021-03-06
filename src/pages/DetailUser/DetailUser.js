import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineVerifiedUser, MdOutlineCheck, MdStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import { userManageServices } from "../../services/userMangeServices";
import UploadImg from "../../Components/UploadImg/UploadImg";
import { removeLoading, setLoading } from "../../reducers/loadingSlice";
import Loading from "../../Components/Loading/Loading";
export default function DetailUser() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const loading = useSelector((state) => state.loadingSlice.loading);
  const userAvatar = useSelector((state) => state.userSlice.avatar);
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoading());
    userManageServices
      .getDetailsUser(id)
      .then((res) => {
        setData(res.data);
        dispatch(removeLoading());
      })
      .catch((err) => {
        dispatch(removeLoading());
        console.log("err", err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto my-32 fontFace">
          <div className="block ml-8 md:flex md:space-x-20 md:ml-2 lg:ml-32 xl:ml-0">
            <div className="border-2 border-gray w-[300px] rounded-lg py-10">
              <div className="flex flex-col items-center justify-center">
                <Avatar
                  src={
                    userAvatar
                      ? userAvatar
                      : "https://joeschmoe.io/api/v1/random"
                  }
                  size={150}
                />
                <div className="mt-5">
                  <UploadImg id={id} />
                </div>
              </div>
              <MdOutlineVerifiedUser className="ml-5 my-5" size={30} />
              <div className="flex flex-col items-start justify-center ml-5">
                <p className="font-bold text-lg">X??c minh danh t??nh</p>
                <p>
                  {" "}
                  X??c th???c danh t??nh c???a b???n v???i huy hi???u x??c minh danh t??nh.
                </p>
                <button className="rounded-2xl border-2 border-black px-7 py-3 font-bold mt-5 hover:bg-black hover:text-white transition-all">
                  Nh???n huy hi???u
                </button>
                <div className="flex items-start justify-center my-5 border-t-2 border-gray">
                  <p className="font-bold my-5">{data?.email} ???? x??c th???c</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdOutlineCheck size={20} />
                  <p>?????a ch??? email</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-10">
              <p className="font-bold text-2xl">
                Xin ch??o, t??i l?? {data?.name}
              </p>
              <p className="text-sm mt-5">B???t ?????u tham gia v??o 2022</p>
              <div className="flex items-center mt-10">
                <MdStar size={30} />
                <p className="font-bold text-xl">0 ????nh gi??</p>
              </div>
              <div className="border-y-2 border-grey my-10 py-10">
                <p className="font-bold underline"> ????nh gi?? c???a b???n</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
