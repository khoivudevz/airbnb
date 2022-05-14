import React from "react";
import { Upload, Button, message } from "antd";
import Swal from "sweetalert2";
import { UploadOutlined } from "@ant-design/icons";
import { token, tokenByClass } from "../../constants/configUrl";
import { localStorageServices } from "../../services/localStorageServices";
import { userManageServices } from "../../services/userMangeServices";

export default ({ id }) => {
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
        Swal.fire(
          "Cập nhật ảnh dại điện thành công!",
          "Tiến hành tải lại trang!",
          "success"
        );
        userManageServices
          .getDetailsUser(id)
          .then((res) => {
            localStorageServices.setAVATAR(res.data.avatar);
          })
          .catch((err) => {
            console.log("err", err);
          });
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
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
