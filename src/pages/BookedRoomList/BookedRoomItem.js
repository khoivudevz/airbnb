import React from "react";
import { Card } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function BookedRoomItem({ data }) {
  const { Meta } = Card;

  let removeTicket = () => {
    Swal.fire("Thông báo!", "Đã gửi yêu cầu hủy đặt phòng", "info");
  };
  return (
    <div className="relative">
      <Card
        style={{ width: 320, height: 430 }}
        cover={
          <img
            alt="example"
            src={
              data?.roomId?.image
                ? data?.roomId?.image
                : "https://airbnb.cybersoft.edu.vn/public/images/room/1652460799873_IMG_20190502_205923.jpg"
            }
          />
        }
      >
        <Meta
          title={data?.roomId?.name}
          description={
            data?.roomId?.description?.length > 60
              ? data?.roomId?.description.slice(0, 60) + "..."
              : data?.roomId?.description
          }
        />
        <div className="my-3">
          <div className="flex space-x-3">
            <p className="font-bold">Nhận phòng:</p>
            <p className="fontFace">
              {moment(data?.checkIn).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
          <div className="flex space-x-3">
            <p className="font-bold">Trả Phòng:</p>
            <p className="fontFace">
              {moment(data?.checkOut).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
        </div>
        <div className="absolute left-4 bottom-0 my-3 space-x-1">
          <Link to={`/room/${data?.roomId?._id}`}>
            <button className="bg-deepblue text-white px-3 py-2 rounded-xl">
              Thông tin phòng chi tiết
            </button>
          </Link>
          <button
            onClick={removeTicket}
            className="bg-hotpink text-white px-3 py-2 rounded-xl"
          >
            Hủy đặt phòng
          </button>
        </div>
      </Card>
    </div>
  );
}
