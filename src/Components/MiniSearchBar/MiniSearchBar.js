import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { locationServices } from "../../services/locationServices";

const { Option } = Select;

export default function MiniSearchBar() {
  const [locationList, setlocationList] = useState(null);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    locationServices
      .getLocationList()
      .then((res) => {
        setlocationList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <div className="relative">
      <div className="flex space-x-2 items-center justify-center ">
        <div className="border-2 border-gray">
          <Select
            showSearch
            placeholder="Bạn sắp đi đâu?"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children?.toLowerCase().includes(input?.toLowerCase())
            }
            style={{ width: "280px" }}
          >
            {locationList?.map((localtion) => {
              return (
                <Option
                  value={localtion.province}
                  className="fontFace text-xl  hover:text-hotpink transition-all"
                >
                  {localtion.province}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    </div>
  );
}
