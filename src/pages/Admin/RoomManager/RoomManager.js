import React, { useEffect, useState } from "react";
import { roomServices } from "../../../services/roomServices";
import CreateRoom from "./CreateRoom/CreateRoom";
import RoomTable from "./RoomTable/RoomTable";

export default function RoomManager() {
  const [data, setData] = useState(null);
  useEffect(() => {
    roomServices
      .getRoomList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <CreateRoom data={data} />
      <RoomTable data={data} />
    </div>
  );
}
