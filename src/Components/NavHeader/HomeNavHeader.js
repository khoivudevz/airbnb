import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import UserNavHeader from "./UserNavHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserNavHeaderLogin from "./UserNavHeaderLogin";
export default function HomeNavHeader() {
  let userInfor = useSelector((state) => state.userSlice.test);
  return (
    <div className="h-20">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Link to="/">
            <div className="flex items-center justify-center">
              <FaAirbnb color="white" size={35} />
              <p className="text-white fontFace text-xl font-bold">airbnb</p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center justify-center text-white fontFace space-x-4">
            <p>Nơi ở</p>
            <p>Trải nghiệm</p>
            <p>Trải nghiệm trực tuyến</p>
          </div>
          <div className="flex items-center justify-center text-white fontFace space-x-4">
            <div className="flex items-center justify-center text-white fontFace space-x-4">
              <p>Trở thành chủ nhà</p>
              <BiWorld size={25} />
            </div>
            {userInfor ? <UserNavHeader /> : <UserNavHeaderLogin />}
          </div>
        </div>
      </div>
    </div>
  );
}
