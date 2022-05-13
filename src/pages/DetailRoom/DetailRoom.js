import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsTranslate, BsDot, BsKeyFill, BsSnow2 } from "react-icons/bs";
import { GiTargetPrize, GiWashingMachine, GiParkBench } from "react-icons/gi";
import { FaUmbrellaBeach, FaSmokingBan, FaShieldVirus } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { Rate } from "antd";
import { Progress } from "antd";
import { RiParkingBoxFill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import {
  AiOutlineWifi,
  AiFillCar,
  AiFillStar,
  AiFillClockCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { MdKitchen } from "react-icons/md";
import { Avatar } from "antd";
import { roomServices } from "../../services/roomServices";
import BookingRoom from "./BookingRoom";

export default function DetailRoom() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    roomServices
      .getDetailsRoom(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="my-32">
      <div className="container mx-auto fontFace">
        <div className="mb-10">
          <div className="text-2xl font-bold flex items-center space-x-3">
            <BsTranslate />
            <p>{data?.name}</p>
          </div>
        </div>
        <div className="flex items-start justify-center w-full h-full my-10">
          <div className="w-[1127px] h-[525px] ">
            <img
              src={
                data?.image
                  ? data?.image
                  : "https://airbnb.cybersoft.edu.vn/public/images/room/1634310452881_viendongsaigon.jpg"
              }
              alt="photo"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <div className="w-[757px] flex items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <p className="text-3xl font-bold">Toàn bộ nhà.</p>
              <div className="flex items-center justify-start text-lg border-b-2 border-b-gray py-5">
                <p>{data?.guests} khách</p> <BsDot />{" "}
                <p>{data?.bedRoom} phỏng ngủ</p>
                <BsDot />
                <p>1 giường</p>
                <BsDot />
                <p>1 phòng tắm</p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-full shadow-2xl">
              <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
            </div>
          </div>
          <BookingRoom data={data} />
        </div>
        <div className="ml-[173px] w-[770px]">
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <div className="flex items-center justify-start space-x-3">
              <div>
                <GiTargetPrize size={30} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-bold text-lg">Chủ nhà siêu cấp</p>
                <p className="text-sm">
                  Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh
                  giá cao và là những người cam kết mang lại quãng thời gian ở
                  tuyệt vời cho khách.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <div>
                <BsKeyFill size={30} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-bold text-lg">
                  Trải nghiệm nhận phòng tuyệt vời
                </p>
                <p className="text-sm">
                  100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <div>
                <RiParkingBoxFill size={30} />
              </div>
              <div>
                <p className="font-bold text-lg">Đỗ xe miễn phí</p>
                <p className="text-sm">
                  Đây là một trong số ít địa điểm có chỗ đỗ xe miễn phí tại khu
                  vực.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <div className="flex space-x-3 items-center">
              <BsTranslate size={20} />{" "}
              <p className="font-bold">
                Một số thông tin đã được dịch tự động.
              </p>
            </div>
            <div>
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <p className="text-xl font-bold">Nơi này có những gì cho bạn</p>
            <div className="grid gap-x-10 gap-y-5 grid-cols-2">
              <div className="flex items-center space-x-3">
                <FaUmbrellaBeach />
                <p>Lối ra bãi biển – Hướng biển</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdKitchen />
                <p>Bếp</p>
              </div>
              <div className="flex items-center space-x-3">
                <AiOutlineWifi />
                <p>Wifi</p>
              </div>
              <div className="flex items-center space-x-3">
                <CgScreen />
                <p>TV</p>
              </div>
              <div className="flex items-center space-x-3">
                <AiFillCar />
                <p>Chỗ đỗ xe miễn phí tại nơi ở</p>
              </div>
              <div className="flex items-center space-x-3">
                <GiWashingMachine />
                <p>Máy giặt</p>
              </div>
              <div className="flex items-center space-x-3">
                <BsSnow2 />
                <p>Điều hòa nhiệt độ</p>
              </div>
              <div className="flex items-center space-x-3">
                <GiParkBench />
                <p>Sân hoặc ban công</p>
              </div>
            </div>
          </div>
          <div className="w-[1170px] space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <div className="flex items-center">
              <AiFillStar size={30} /> <BsDot />{" "}
              <p className="font-bold text-xl">4,6</p>
            </div>
            <Rate value={4} />
            <div className="grid grid-cols-2 gap-x-20 gap-y-10 w-full">
              <div className="flex items-center justify-between">
                <p>Mức độ sạch sẽ</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={91} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Giao tiếp</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={94} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Nhận phòng</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={85} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Độ chính xác</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={92} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Vị trí</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={80} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Giá trị</p>{" "}
                <div className="w-[300px]">
                  <Progress percent={90} strokeColor="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1170px] h-[600px] space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251289.97364509906!2d103.81699550970684!3d10.22881532578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1651949387002!5m2!1svi!2s"
            ></iframe>
          </div>
          <div className="w-[1170px] space-y-5 flex flex-col items-start justify-center text-lg py-5">
            <p className="text-2xl font-bold">Những điều cần biết</p>
            <div className="grid grid-cols-3 gap-x-20">
              <div className="flex flex-col items-start justify-center space-y-3">
                <p className="font-bold">Nội quy nhà</p>
                <div className="flex items-center justify-start space-x-3 text-base">
                  <AiFillClockCircle /> <p>Nhận phòng: Sau 14:00</p>
                </div>
                <div className="flex items-center justify-start space-x-3  text-base">
                  <AiFillClockCircle /> <p>Trả phòng: 12:00</p>
                </div>
                <div className="flex items-center justify-start space-x-3  text-base">
                  <FaSmokingBan /> <p>Không hút thuốc</p>
                </div>
                <div className="flex items-center justify-start space-x-3  text-base">
                  <MdPets /> <p>Không thú cưng</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center space-y-3">
                <p className="font-bold">Y tế và an toàn</p>
                <div className="flex items-center justify-start space-x-3 text-base">
                  <FaShieldVirus />{" "}
                  <p>
                    Các biện pháp an toàn trong đại dịch COVID-19 của Airbnb
                    được áp dụng
                  </p>
                </div>
                <div className="flex items-center justify-start space-x-3  text-base">
                  <AiFillQuestionCircle />{" "}
                  <p>Chưa có thông tin về việc có máy phát hiện khí CO</p>
                </div>
                <div className="flex items-center justify-start space-x-3  text-base">
                  <AiFillQuestionCircle />{" "}
                  <p>Chưa có thông tin về việc có máy báo khói</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center space-y-3">
                <p className="font-bold">Chính sách hủy</p>
                <p className="text-base">
                  Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính
                  sách hủy cho đặt phòng này.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
