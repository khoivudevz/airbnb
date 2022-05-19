import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { locationServices } from "../../services/locationServices";
export default function MiniSearchBar() {
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
  };
  useEffect(() => {
    locationServices
      .getLocationList()
      .then((res) => {
        setlocationList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <div className="relative">
      <div className="flex space-x-2 items-center justify-center ">
        <input
          type="text"
          placeholder="Bạn sắp đi đâu"
          className="w-full border-2 border-grey rounded-xl px-4 py-1"
          onClick={openDropDown}
          onBlur={closeDropDown}
          onChange={handleOnchange}
        />
        <Link to="/rooms">
          <AiOutlineSearch size={30} color="grey" />
        </Link>
      </div>
      {dropDown ? (
        <div className="absolute left-0">
          <div className="w-[390px] h-[300px] bg-white  rounded-xl flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center mt-5">
              <div className="flex flex-col items-center justify-center mb-5">
                <AiOutlineSearch /> Tìm kiếm mọi nơi...
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
                ?.map((localtion) => {
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
