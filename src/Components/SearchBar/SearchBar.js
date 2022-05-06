import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="hidden md:block h-[157px] bg-transparent top-[130px] z-10 absolute w-full">
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
  );
}
