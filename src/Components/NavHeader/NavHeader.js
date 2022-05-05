import React from "react";
import { FaAirbnb, FaSearch } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import UserNavHeader from "./UserNavHeader";
export default function NavHeader() {
  return (
    <>
      <div className="w-screen h-20 bg-black">
        <div className="container mx-auto w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center justify-center">
              <FaAirbnb color="white" size={35} />
              <p className="text-white fontFace text-xl font-bold">airbnb</p>
            </div>
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
              <UserNavHeader />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[157px] bg-black">
        <div className="w-full h-full flex justify-center">
          <div className="w-[870px] h-[75px] bg-white rounded-full">
            <div className="w-full h-full grid grid-cols-11 fontFace">
              <div className="col-span-4 flex flex-col items-start justify-center pl-7">
                <p className="font-bold">Địa điểm</p>
                <p className="text-grey">Bạn sắp đi đâu?</p>
              </div>
              <div className="col-span-2  border-l-2 border-l-gray my-4">
                <div className="flex flex-col items-start justify-center ml-7">
                  <p className="font-bold">Nhận phòng</p>
                  <p className="text-grey">Thêm ngày</p>
                </div>
              </div>
              <div className="col-span-2  border-l-2 border-l-gray my-4">
                <div className="flex flex-col items-start justify-center ml-7">
                  <p className="font-bold">Trả phòng</p>
                  <p className="text-grey">Thêm ngày</p>
                </div>
              </div>
              <div className="col-span-2  border-l-2 border-l-gray my-4">
                <div className="flex flex-col items-start justify-center ml-7">
                  <p className="font-bold">Khách</p>
                  <p className="text-grey">Thêm khách</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex items-center justify-center bg-hotpink w-[50px] h-[50px] rounded-full">
                  <FaSearch color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
