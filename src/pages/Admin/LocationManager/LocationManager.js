import React, { useEffect, useState } from "react";
import { locationServices } from "../../../services/locationServices";
import CreateLocation from "./CreateLocation/CreateLocation";
import LocationTable from "./LocationTable/LocationTable";

export default function LocationManager() {
  const [data, setData] = useState(null);
  useEffect(() => {
    locationServices
      .getLocationList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <div>
      <CreateLocation data={data} />
      <LocationTable data={data} />
    </div>
  );
}
