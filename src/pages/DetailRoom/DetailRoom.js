import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { removeLoading, setLoading } from "../../reducers/loadingSlice";
import Loading from "../../Components/Loading/Loading";

export default function DetailRoom() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingSlice.loading);
  let { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoading());
    roomServices
      .getDetailsRoom(id)
      .then((res) => {
        setData(res.data);
        dispatch(removeLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(removeLoading());
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="my-32 overflow-hidden">
      <div className="container mx-auto fontFace">
        <div className="mb-10">
          <div className="mx-[50px] xl:mx-[100px] text-2xl font-bold flex items-center space-x-3">
            <BsTranslate />
            <p>{data?.name}</p>
          </div>
        </div>
        <div className="flex items-start justify-center w-full h-full my-10 mx-[4px] md:mx-[0]  ">
          <div className="w-[300px] h-[300px] sm:w-[700px] sm:h-[400px] lg:w-[900px] lg:h-[540px] xl:w-[1127px] xl:h-[525px] ">
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
        <div className="lg:mx-[50px] flex justify-center space-x-5">
          <div className="hidden w-[757px] lg:flex items-center justify-between ">
            <div className="hidden lg:flex flex-col items-start justify-center">
              <p className="text-3xl font-bold">To??n b??? nh??.</p>
              <div className="flex items-center justify-start text-lg border-b-2 border-b-gray py-5">
                <p>{data?.guests} kh??ch</p> <BsDot />{" "}
                <p>{data?.bedRoom} ph???ng ng???</p>
                <BsDot />
                <p>1 gi?????ng</p>
                <BsDot />
                <p>1 ph??ng t???m</p>
              </div>
            </div>
            <div className="hidden xl:flex items-center justify-center rounded-full shadow-2xl">
              <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
            </div>
          </div>
          <BookingRoom data={data} id={id} />
        </div>
        <div className=" w-[300px] xl:ml-[173px] xl:w-[770px]">
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5 w-[300px] ml-20px] md:mx-[30px] md:w-[700px] xl:w-[1000px] mx-[20px]">
            <div className="flex items-center justify-start space-x-3">
              <div>
                <GiTargetPrize size={30} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-bold text-lg">Ch??? nh?? si??u c???p</p>
                <p className="text-sm">
                  Ch??? nh?? si??u c???p l?? nh???ng ch??? nh?? c?? kinh nghi???m, ???????c ????nh
                  gi?? cao v?? l?? nh???ng ng?????i cam k???t mang l???i qu??ng th???i gian ???
                  tuy???t v???i cho kh??ch.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <div>
                <BsKeyFill size={30} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="font-bold text-lg">
                  Tr???i nghi???m nh???n ph??ng tuy???t v???i
                </p>
                <p className="text-sm">
                  100% kh??ch g???n ????y ???? x???p h???ng 5 sao cho quy tr??nh nh???n ph??ng.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <div>
                <RiParkingBoxFill size={30} />
              </div>
              <div>
                <p className="font-bold text-lg">????? xe mi???n ph??</p>
                <p className="text-sm">
                  ????y l?? m???t trong s??? ??t ?????a ??i???m c?? ch??? ????? xe mi???n ph?? t???i khu
                  v???c.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5 md:w-[500px] md:mx-[30px] w-[300px] mx-[20px]">
            <div className="flex space-x-3 items-center">
              <BsTranslate size={20} />{" "}
              <p className="font-bold">
                M???t s??? th??ng tin ???? ???????c d???ch t??? ?????ng.
              </p>
            </div>
            <div>
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5 mx-[20px] md:mx-[30px]">
            <p className="text-xl font-bold">N??i n??y c?? nh???ng g?? cho b???n</p>
            <div className="grid gap-x-32 gap-y-10 grid-cols-1 md:grid-cols-2">
              <div className="flex items-center space-x-3">
                <FaUmbrellaBeach />
                <p>L???i ra b??i bi???n ??? H?????ng bi???n</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdKitchen />
                <p>B???p</p>
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
                <p>Ch??? ????? xe mi???n ph?? t???i n??i ???</p>
              </div>
              <div className="flex items-center space-x-3">
                <GiWashingMachine />
                <p>M??y gi???t</p>
              </div>
              <div className="flex items-center space-x-3">
                <BsSnow2 />
                <p>??i???u h??a nhi???t ?????</p>
              </div>
              <div className="flex items-center space-x-3">
                <GiParkBench />
                <p>S??n ho???c ban c??ng</p>
              </div>
            </div>
          </div>
          <div className=" hidden md:mx-[30px] md:w-[300px] lg:w-[500px] w-[1170px] space-y-5 md:flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <div className="flex items-center">
              <AiFillStar size={30} /> <BsDot />{" "}
              <p className="font-bold text-xl">4,6</p>
            </div>
            <Rate value={4} />
            <div className="grid grid-cols-2 gap-x-20 gap-y-10 md:w-[500px] lg:w-[700px] xl:w-[1000px]">
              <div className="flex items-center justify-between">
                <p>M???c ????? s???ch s???</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={91} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Giao ti???p</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={94} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Nh???n ph??ng</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={85} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>????? ch??nh x??c</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={92} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>V??? tr??</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={80} strokeColor="black" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Gi?? tr???</p>{" "}
                <div className="w-[100px] lg:w-[150px] xl:w-[300px]">
                  <Progress percent={90} strokeColor="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:w-[700px] md:h-[300px] md:mx-[30px] lg:w-[900px] lg:h-[400px] xl:w-[1170px] xl:h-[600px] space-y-5 md:flex flex-col items-start justify-center text-lg border-b-2 border-b-gray py-5">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251289.97364509906!2d103.81699550970684!3d10.22881532578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1651949387002!5m2!1svi!2s"
            ></iframe>
          </div>
          <div className="my-20 flex items-start justify-center flex-col  ml-[20px]">
            <p className="text-2xl font-bold">Nh???ng ??i???u c???n bi???t</p>
            <div className="mt-5 flex flex-col items-start justify-center w-full lg:w-[900px] xl:w-[1280px] space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-y-5 lg:grid-cols-3 xl:gap-x-10">
              <div className="w-[320px] xl:w-[320px]">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <p className="font-bold">N???i quy nh??</p>
                  <div className="flex items-center justify-start space-x-3 text-base">
                    <AiFillClockCircle size={20} /> <p>Nh???n ph??ng: Sau 14:00</p>
                  </div>
                  <div className="flex items-center justify-start space-x-3  text-base">
                    <AiFillClockCircle size={20} /> <p>Tr??? ph??ng: 12:00</p>
                  </div>
                  <div className="flex items-center justify-start space-x-3  text-base">
                    <FaSmokingBan size={20} /> <p>Kh??ng h??t thu???c</p>
                  </div>
                  <div className="flex items-center justify-start space-x-3  text-base">
                    <MdPets size={20} /> <p>Kh??ng th?? c??ng</p>
                  </div>
                </div>
              </div>
              <div className="w-[320px] lg:w-[200px] xl:w-[320px] ">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <p className="font-bold">Y t??? v?? an to??n</p>
                  <div className="flex items-center justify-start space-x-3 text-base">
                    <FaShieldVirus size={30} />{" "}
                    <p>
                      C??c bi???n ph??p an to??n trong ?????i d???ch COVID-19 c???a Airbnb
                      ???????c ??p d???ng
                    </p>
                  </div>
                  <div className="flex items-center justify-start space-x-3  text-base">
                    <AiFillQuestionCircle size={20} />{" "}
                    <p>Ch??a c?? th??ng tin v??? vi???c c?? m??y ph??t hi???n kh?? CO</p>
                  </div>
                  <div className="flex items-center justify-start space-x-3  text-base">
                    <AiFillQuestionCircle size={20} />{" "}
                    <p>Ch??a c?? th??ng tin v??? vi???c c?? m??y b??o kh??i</p>
                  </div>
                </div>
              </div>
              <div className="w-[320px] lg:w-[200px] xl:w-[320px] ">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <p className="font-bold">Ch??nh s??ch h???y</p>
                  <p className="text-base">
                    Th??m ng??y cho chuy???n ??i c???a b???n ????? nh???n th??ng tin v??? ch??nh
                    s??ch h???y cho ?????t ph??ng n??y.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
