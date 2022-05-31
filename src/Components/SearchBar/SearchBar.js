import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DatePicker, Select } from "antd";
import { locationServices } from "../../services/locationServices";
const { Option } = Select;

export default function SearchBar() {
  const [locationList, setlocationList] = useState(null);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);
  const [guests, setGuests] = useState(0);

  const onStartChange = (value) => {
    setStartValue(value);
  };
  const onEndChange = (value) => {
    setEndValue(value);
  };

  const handleEndOpenChange = (open) => {
    setEndOpen(open);
  };
  const disabledStartDate = (startValue) => {
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  const disabledEndDate = (endValue) => {
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  const onChange = (value) => {
    // console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    // console.log("search:", value);
  };

  const handleUpGuests = () => {
    setGuests(guests + 1);
  };
  const handleDownGuests = () => {
    if (guests != 0) {
      setGuests(guests - 1);
    } else {
      return;
    }
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

              <Select
                showSearch
                placeholder="Chọn một địa điểm"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children?.toLowerCase().includes(input?.toLowerCase())
                }
                style={{ width: "280px" }}
              >
                {locationList?.map((localtion) => {
                  return (
                    <Option
                      value={localtion.province}
                      className="fontFace text-xl  hover:text-hotpink transition-all"
                    >
                      {localtion.province}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start justify-center ml-4 cursor-pointer">
                <p className="font-bold">Nhận phòng</p>
                <DatePicker
                  style={{ height: "10px", marginRight: "7px", border: "none" }}
                  placeholder="Nhận phòng"
                  onChange={onStartChange}
                  disabledDate={disabledStartDate}
                />
              </div>
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start  justify-center ml-4 cursor-pointer">
                <p className="font-bold">Trả phòng</p>
                <DatePicker
                  style={{ height: "10px", marginRight: "7px", border: "none" }}
                  placeholder="Trả phòng"
                  onChange={onEndChange}
                  open={endOpen}
                  onOpenChange={handleEndOpenChange}
                  disabledDate={disabledEndDate}
                />
              </div>
            </div>
            <div className="col-span-2  border-l-2 border-l-gray my-4">
              <div className="flex flex-col items-start justify-center ml-7 cursor-pointer">
                <p className="font-bold">Khách</p>
                <div className="flex items-center justify-center space-x-3">
                  <div
                    className="text-black hover:text-hotpink transition-all"
                    onClick={handleUpGuests}
                  >
                    <AiFillPlusCircle size={30} />
                  </div>
                  <p className="text-xl">{guests}</p>{" "}
                  <div
                    className="text-black hover:text-hotpink transition-all"
                    onClick={handleDownGuests}
                  >
                    <AiFillMinusCircle size={30} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link to="/rooms">
                <div className="flex items-center justify-center bg-hotpink text-white hover:bg-white hover:shadow-xl hover:text-hotpink  transition-all w-[50px] h-[50px] rounded-full">
                  <FaSearch size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
