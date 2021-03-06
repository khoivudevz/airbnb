import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import UserNavHeader from "./UserNavHeader";
import { Link } from "react-router-dom";
import UserNavHeaderLogin from "./UserNavHeaderLogin";
import { useSelector } from "react-redux";
import MiniSearchBar from "../MiniSearchBar/MiniSearchBar";
export default function NavHeader() {
  let userInfor = useSelector((state) => state.userSlice.userInfor);
  return (
    <div className="h-20 bg-white fixed top-0 w-full shadow-xl z-10">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Link to="/">
            <div className="flex items-center justify-center">
              <FaAirbnb color="#ff385c" size={35} />
              <p className="text-hotpink fontFace text-xl font-bold">airbnb</p>
            </div>
          </Link>
          <MiniSearchBar />
          <div className="flex items-center justify-center text-black fontFace space-x-4">
            <div className="flex items-center justify-center text-black fontFace space-x-4 ">
              <p className="hover:decoration-hotpink hover:decoration-2 hover:underline cursor-pointer transition-all">
                Trở thành chủ nhà
              </p>
              <BiWorld
                size={25}
                className="hover:text-hotpink cursor-pointer transition-all"
              />
            </div>
            {userInfor ? <UserNavHeaderLogin /> : <UserNavHeader />}
          </div>
        </div>
      </div>
    </div>
  );
}
