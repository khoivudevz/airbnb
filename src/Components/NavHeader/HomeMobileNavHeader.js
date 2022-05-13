import React from "react";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "antd";

export default function HomeMobileNavHeader() {
  let userInfor = useSelector((state) => state.userSlice.userInfor);
  let userAvatar = useSelector((state) => state.userSlice.avatar);

  return (
    <>
      <div className=" h-20 w-full fixed top-0 z-10 ">
        <div className="container mx-auto w-full h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="bg-white rounded-full w-11/12 h-4/6 shadow-xl">
              <Link to="/rooms">
                <div className="w-full h-full flex items-center justify-center space-x-3">
                  <FaSearch color="red" />
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
                <FaSearch size={20} color="#a0a0a0" />
                <p className="text-xs">Khám phá</p>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <AiOutlineHeart size={30} color="#a0a0a0" />
              <p className="text-xs">Yêu thích</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              {userInfor ? (
                <Link to="/muser">
                  <div className="flex flex-col items-center justify-center">
                    <Avatar src={userAvatar} />
                    <p className="text-xs">Hồ sơ</p>
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div className="flex flex-col items-center justify-center">
                    <FaRegUserCircle size={30} color="#a0a0a0" />
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
