import React from "react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { locationServices } from "../../../../services/locationServices";
import { tokenByClass } from "../../../../constants/configUrl";
import { useSelector } from "react-redux";

export default function FormUpdateLocation({ data, id }) {
  let ADMIN_TOKEN = useSelector((state) => state.adminSlice.adminToken);

  const props = {
    name: "location",
    action: `https://airbnb.cybersoft.edu.vn/api/locations/upload-images/${id}`,
    headers: {
      token: ADMIN_TOKEN,
      tokenByClass,
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        Swal.fire(
          "Cập nhật ảnh phòng thành công!",
          "Tiến hành tải lại trang!",
          "success"
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (info.file.status === "error") {
        message.error("Cập nhật ảnh đại diện thất bại");
      }
    },
  };

  const onFinish = (values) => {
    let data = { ...values, valueate: 8 };
    locationServices
      .updateInformationLocation(id, data)
      .then((res) => {
        Swal.fire("Thành công!", "Đã cập nhật thông tin!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên vị trí"
        name="name"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên vị trí!",
          },
        ]}
        initialValue={data.name}
      >
        <Input defaultValue={data.name} />
      </Form.Item>
      <Form.Item
        label="Tên thành phố"
        name="province"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên thành phố!",
          },
        ]}
        initialValue={data.province}
      >
        <Input defaultValue={data.province} />
      </Form.Item>
      <Form.Item
        label="Tên đất nước"
        name="country"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên đất nước!",
          },
        ]}
        initialValue={data.country}
      >
        <Input defaultValue={data.country} />
      </Form.Item>

      <div className="flex items-center justify-center mt-10 mb-16">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Cập nhật ảnh phòng</Button>
        </Upload>
      </div>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Tạo vị trí
        </Button>
      </Form.Item>
    </Form>
  );
}
