import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { userManageServices } from "../../../../services/userMangeServices";
import { BsGearWide } from "react-icons/bs";
import UserItem from "./UserItem";
export default function UserList() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const totalPages = Math.ceil(data?.length);
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  let onChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    userManageServices
      .getUserList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <>
      <table className="table-fixed w-full">
        <thead style={{ background: "#fafafa" }}>
          <tr>
            <th className="hidden lg:block">ID</th>
            <th>Email</th>
            <th className="flex items-center justify-center">
              <BsGearWide size={25} />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((user) => {
            return (
              <tr>
                <UserItem data={user} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-10 mb-20">
        <Pagination
          defaultCurrent={currentPage}
          total={totalPages}
          pageSize={postsPerPage}
          onChange={onChange}
        />
      </div>
    </>
  );
}
