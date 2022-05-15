import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsDoorClosed } from "react-icons/bs";
import { Pagination } from "antd";
import { ticketManagerServices } from "../../services/ticketManagerServices";
import BookedRoomItem from "./BookedRoomItem";

export default function BookedRoomList() {
  let { id } = useParams();
  let [ticketList, setTicketList] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(8);
  let totalPages = Math.ceil(ticketList?.length);
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = ticketList?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    ticketManagerServices
      .getTicketListOfUser(id)
      .then((res) => {
        setTicketList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return ticketList?.length !== 0 ? (
    <div className="pt-28 container mx-auto">
      <div className="grid grid-cols-4 gap-y-10">
        {currentPosts?.map((item, index) => {
          return <BookedRoomItem data={item} />;
        })}
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Pagination
          defaultCurrent={currentPage}
          total={totalPages}
          pageSize={postsPerPage}
          onChange={onChange}
        />
      </div>
    </div>
  ) : (
    <div className="pt-28 container mx-auto h-screen">
      <div className=" flex h-full items-center justify-center ">
        <div className="flex items-center justify-center">
          <BsDoorClosed size={200} />
          <p className="text-3xl">Bạn chưa đặt phòng nào...</p>
        </div>
      </div>
    </div>
  );
}
