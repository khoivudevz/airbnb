import React, { useEffect, useState } from "react";
import { roomServices } from "../../services/roomServices";
import { Pagination } from "antd";
import { FaUserAlt, FaBath, FaHotTub } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineWifi } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLoading, setLoading } from "../../reducers/loadingSlice";
import Loading from "../../Components/Loading/Loading";

export default function AllLocation() {
  let loading = useSelector((state) => state.loadingSlice.loading);
  const dispatch = useDispatch();
  const [roomList, setRoomList] = useState(null);
  let [currentPage, setcurrentPage] = useState(1);
  let [postsPerPage, setpostsPerPage] = useState(20);
  let totalPages = Math.ceil(roomList?.length);
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = roomList?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setcurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoading());
    roomServices
      .getRoomList()
      .then((res) => {
        setRoomList(res.data);
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
    <div className="pt-20">
      <div className="flex">
        <div className="m-10 space-y-2">
          {currentPosts?.map((room) => {
            return (
              <Link to={`/room/${room._id}`}>
                <div className=" shadow-md flex items-center justify-center lg:justify-start fontFace md:py-5">
                  <div className="flex flex-col md:flex-row md:space-x-5">
                    <div className="xl:w-[300px] xl:h-[200px] ">
                      <img
                        src={
                          room?.image
                            ? room?.image
                            : "https://airbnb.cybersoft.edu.vn/public/images/room/1634310452881_viendongsaigon.jpg"
                        }
                        alt="room"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col lg:w-[800px] xl:w-[500px] xl:h-[200px] space-y-3">
                      <p className="text-xl w-full ">{room?.name}</p>
                      <div className="flex flex-wrap">
                        <div className="flex items-center space-x-2">
                          <FaUserAlt size={10} /> <div>{room.guests} khách</div>
                          <BsDot />
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaBath size={10} />
                          <div>{room.bath} phòng tắm</div>
                          <BsDot />
                        </div>
                        <div>
                          {room.gym ? (
                            <div className="flex items-center space-x-2">
                              <CgGym size={10} /> <div>phòng tập</div>
                              <BsDot />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          {room.hotTub ? (
                            <div className="flex items-center space-x-2">
                              <FaHotTub size={10} /> <div>Bể sục</div>
                              <BsDot />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          {room.wifi ? (
                            <div className="flex items-center space-x-2">
                              <AiOutlineWifi size={10} /> <div>Wifi</div>
                              <BsDot />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div>
                          {room.cableTV ? (
                            <div className="flex items-center space-x-2">
                              <HiOutlineDesktopComputer size={10} />{" "}
                              <div>TV</div>
                              <BsDot />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm pt-5">{room.description}</p>
                      </div>
                      <div className="flex items-center justify-end">
                        <div className="flex items-center">
                          <MdAttachMoney size={30} />{" "}
                          <p className="text-xl font-bold">
                            {room?.price}
                            <span className="font-thin text-lg">/ đêm</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="flex items-center justify-center my-40">
            <Pagination
              defaultCurrent={currentPage}
              pageSize={postsPerPage}
              onChange={onChange}
              total={totalPages}
            />
          </div>
        </div>
        <div className="hidden xl:block h-screen w-full relative">
          <div className="h-full w-full absolute">
            <div className="h-full w-full fixed">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251289.97364509906!2d103.81699550970684!3d10.22881532578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1651949387002!5m2!1svi!2s"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
