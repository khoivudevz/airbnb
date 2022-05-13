import React, { useEffect, useState } from "react";
import { userManageServices } from "../../services/userMangeServices";
import UserTable from "./UserTable";
export default function UserList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    userManageServices
      .getUserList()
      .then((res) => {
        // console.log("res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <UserTable userList={data} />
    </div>
  );
}
