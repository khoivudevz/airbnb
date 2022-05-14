import React from "react";
import { Upload, Button, message } from "antd";
import Swal from "sweetalert2";
import { UploadOutlined } from "@ant-design/icons";
import { tokenByClass } from "../../constants/configUrl";
import { localStorageServices } from "../../services/localStorageServices";
import { userManageServices } from "../../services/userMangeServices";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../reducers/userSlice";

export default ({ id }) => {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.userSlice.token);
  const props = {
    name: "avatar",
    action: "https://airbnb.cybersoft.edu.vn/api/users/upload-avatar/",
    headers: {
      token,
      tokenByClass,
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        Swal.fire("Thành công!", "Đã cập nhật ảnh đại diện!", "success");
        userManageServices
          .getDetailsUser(id)
          .then((res) => {
            dispatch(setAvatar(res.data.avatar));
            localStorageServices.setAVATAR(res.data.avatar);
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else if (info.file.status === "error") {
        message.error("Cập nhật ảnh đại diện thất bại");
      }
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Cập nhật ảnh đại diện</Button>
    </Upload>
  );
};
