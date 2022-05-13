import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { token, tokenByClass } from "../../constants/configUrl";
const props = {
  name: "avatar",
  action: "https://airbnb.cybersoft.edu.vn/api/users/upload-avatar/",
  headers: {
    token,
    tokenByClass,
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success("Cập nhật ảnh đại diện thành công");
      window.location.reload();
    } else if (info.file.status === "error") {
      message.error("Cập nhật ảnh đại diện thất bại");
    }
  },
};

export default () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Cập nhật ảnh đại diện</Button>
  </Upload>
);
