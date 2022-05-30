import React, { useState } from "react";
import Swal from "sweetalert2";
import { DatePicker } from "antd";
import { AiFillStar } from "react-icons/ai";
import { roomServices } from "../../services/roomServices";

export default function BookingRoom({ data, id }) {
  const [time, setTime] = useState(null);
  const { RangePicker } = DatePicker;

  function onChange(data, dataString) {
    setTime(dataString);
  }

  const handleBooking = () => {
    let data = {
      roomId: id,
      checkIn: time[0],
      checkOut: time[1],
    };
    roomServices
      .bookingRoom(data)
      .then((res) => {
        Swal.fire("Chúc mừng!", "Bạn đã đặt phòng thành công!", "success");
      })
      .catch((err) => {
        Swal.fire(
          "Không thành công!",
          "Tài khoản không đủ thẩm quyền để đặt phòng!",
          "error"
        );
      });
  };
  return (
    <div className="w-[300px] md:w-[600px] lg:w-[376px] rounded-xl shadow-xl border-2 border-grayBg">
      <div className="flex items-center justify-between m-5">
        <div className="flex items-center space-x-1">
          <p className=" text-3xl">$</p>{" "}
          <p className="font-bold text-2xl">{data?.price}</p>{" "}
          <p className="text-base">/đêm</p>
        </div>
        <div className="flex items-center space-x-1">
          <AiFillStar size={20} />
          <p className="font-bold text-base">4,6</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <RangePicker onChange={onChange} />
      </div>
      <div className="flex items-center justify-center m-5 cursor-pointer">
        <div
          onClick={handleBooking}
          className="w-[350px] h-[53px] bg-hotpink shadow-xl hover:bg-white hover:text-hotpink transition-all rounded-xl text-white flex items-center justify-center"
        >
          <p className="text-lg">Đặt phòng</p>
        </div>
      </div>
    </div>
  );
}
