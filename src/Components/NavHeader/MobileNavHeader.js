import React from "react";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export default function MobileNavHeader() {
  return (
    <>
      <div className=" h-20 ">
        <div className="container mx-auto w-full h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="bg-white rounded-full w-11/12 h-4/6">
              <div className="w-full h-full flex items-center justify-center space-x-3">
                <FaSearch color="red" />
                <p className="fontFace font-bold">Bạn sắp đi đâu?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white absolute bottom-0 ">
        <div className="container mx-auto w-full h-full">
          <div className="grid grid-cols-3 w-full h-full fontFace">
            <div className="flex flex-col items-center justify-center">
              <FaSearch size={20} color="#a0a0a0" />
              <p className="text-xs">Khám phá</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <AiOutlineHeart size={30} color="#a0a0a0" />
              <p className="text-xs">Yêu thích</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaRegUserCircle size={30} color="#a0a0a0" />
              <p className="text-xs">Đăng nhập</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
