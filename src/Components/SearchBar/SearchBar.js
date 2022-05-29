import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { locationServices } from "../../services/locationServices";
export default function SearchBar() {
  const [dropDown, setdropDown] = useState(false);
  const [locationList, setlocationList] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");
  const openDropDown = () => {
    setdropDown(true);
  };
  const closeDropDown = () => {
    setTimeout(() => {
      setdropDown(false);
    }, 100);
  };
  const handleOnchange = (e) => {
    setsearchTerm(e.target.value);
    let data = locationList.map((e) => {
      return e.province;
    });
    console.log("data", data);
  };
  useEffect(() => {
    locationServices
      .getLocationList()
      .then((res) => {
        setlocationList(res.data);
        // console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="hidden md:block h-[157px] bg-transparent top-[60px] z-10 absolute w-full">
      <div className="w-full h-full flex justify-center">
        <div className="w-[870px] h-[75px] bg-white rounded-full relative">
          <div className="w-full h-full grid grid-cols-11 fontFace">
            <div className="col-span-4 flex flex-col items-start justify-center pl-7 ">
              <p className="font-bold">Địa điểm</p>
              <input
                type="text"
                placeholder="Bạn sắp đi đâu"
                className="w-full "
                onClick={openDropDown}
                onBlur={closeDropDown}
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start justify-center ml-7 cursor-not-allowed">
                <p className="font-bold">Nhận phòng</p>
                <p className="text-grey">Thêm ngày</p>
              </div>
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start justify-center ml-7 cursor-not-allowed">
                <p className="font-bold">Trả phòng</p>
                <p className="text-grey">Thêm ngày</p>
              </div>
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start justify-center ml-7 cursor-not-allowed">
                <p className="font-bold">Khách</p>
                <p className="text-grey">Thêm khách</p>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link to="/rooms">
                <div className="flex items-center justify-center bg-hotpink text-white hover:bg-white hover:shadow-xl hover:text-hotpink  transition-all w-[50px] h-[50px] rounded-full">
                  <FaSearch size={20} />
                </div>
              </Link>
            </div>
            {dropDown ? (
              <div className="w-[390px] h-[300px]  bg-white rounded-xl mt-5 flex flex-col items-center justify-center ">
                <div className="flex items-center justify-center mt-5">
                  <div className="flex items-center justify-center mb-5">
                    <FaSearch /> Tìm kiếm mọi nơi...
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center space-y-5 overflow-y-scroll ">
                  {locationList
                    ?.filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.province
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((localtion) => {
                      return (
                        <Link to="/rooms">
                          <div className="fontFace text-xl">
                            {localtion.province}
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
