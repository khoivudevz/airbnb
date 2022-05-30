import React, { useEffect } from "react";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "antd";

export default function HomeMobileNavHeader() {
  let userInfor = useSelector((state) => state.userSlice.userInfor);
  let userAvatar = useSelector((state) => state.userSlice.avatar);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" h-20 w-full fixed top-0 z-10 ">
        <div className="container mx-auto w-full h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="bg-white hover:bg-hotpink rounded-full w-11/12 h-4/6 shadow-xl">
              <Link to="/rooms">
                <div className="w-full h-full text-hotpink hover:text-white flex items-center justify-center space-x-3">
                  <FaSearch />
                  <p className="fontFace font-bold">Bạn sắp đi đâu?</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white fixed bottom-0 z-50 ">
        <div className="container mx-auto w-full h-full">
          <div className="grid grid-cols-3 w-full h-full fontFace">
            <div className="flex flex-col items-center justify-center">
              <Link to="/rooms">
                <div className="text-black hover:text-hotpink flex flex-col items-center justify-center">
                  <FaSearch size={20} />
                  <p className="text-xs">Khám phá</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Link
                className="flex flex-col items-center justify-center"
                to={`/booked/${userInfor?._id}`}
              >
                <div className="text-black hover:text-hotpink flex flex-col items-center justify-center">
                  <MdOutlineMeetingRoom size={30} />
                  <p className="text-xs">Phòng đã đặt</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              {userInfor ? (
                <Link to="/muser">
                  <div className="flex flex-col items-center justify-center text-black hover:text-hotpink ">
                    <Avatar src={userAvatar} />
                    <p className="text-xs">Hồ sơ</p>
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div className="flex flex-col items-center justify-center text-black hover:text-hotpink">
                    <FaRegUserCircle size={30} />
                    <p className="text-xs">Đăng nhập</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
