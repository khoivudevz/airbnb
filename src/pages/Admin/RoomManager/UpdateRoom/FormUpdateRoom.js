import React from "react";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { roomServices } from "../../../../services/roomServices";
import { tokenByClass } from "../../../../constants/configUrl";
import { useSelector } from "react-redux";

export default function FormUpdateRoom({ data, id }) {
  let ADMIN_TOKEN = useSelector((state) => state.adminSlice.adminToken);
  const { Option } = Select;
  const onFinish = (values) => {
    roomServices
      .updateDetailsRoom(id, values)
      .then((res) => {
        Swal.fire("Thành công!", "Đã cập nhật thông tin!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const props = {
    name: "room",
    action: `https://airbnb.cybersoft.edu.vn/api/rooms/upload-image/${id}`,
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
        label="Tên khách sạn"
        name="name"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên khách sạn!",
          },
        ]}
        initialValue={data.name}
      >
        <Input defaultValue={data.name} />
      </Form.Item>
      <Form.Item
        label="Số lượng khách"
        name="guests"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số lượng khách!",
          },
        ]}
        initialValue={data.guests}
      >
        <Input defaultValue={data.name} />
      </Form.Item>

      <Form.Item
        label="Số lượng phòng ngủ"
        name="bedRoom"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số phòng ngủ!",
          },
        ]}
        initialValue={data.bedRoom}
      >
        <Input defaultValue={data.bedRoom} />
      </Form.Item>

      <Form.Item
        label="Số lượng phòng tắm"
        name="bath"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số phòng tắm!",
          },
        ]}
        initialValue={data.bath}
      >
        <Input defaultValue={data.bath} />
      </Form.Item>

      <Form.Item
        label="Mô tả khách sạn"
        name="description"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mô tả khách sạn!",
          },
        ]}
        initialValue={data.description}
      >
        <Input defaultValue={data.description} />
      </Form.Item>

      <Form.Item
        label="Giá tiền khách sạn"
        name="price"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập giá tiền tại khách sạn!",
          },
        ]}
        initialValue={data.price}
      >
        <Input defaultValue={data.price} />
      </Form.Item>

      <Form.Item
        label="Thang máy"
        name="elevator"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có thang máy không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Bể sục"
        name="hotTub"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có bể sục không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Hồ bơi"
        name="pool"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có hồ bơi?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Lò sưởi"
        name="indoorFireplace"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có lò sửa?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Máy sấy tóc"
        name="dryer"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có máy sấy tóc?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Phòng tập gym"
        name="gym"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có phòng tập gym không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Nhà bếp"
        name="kitchen"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có nhà bếp không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Wifi"
        name="wifi"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có wifi không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Máy nóng lạnh"
        name="heating"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có máy nóng lạnh?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="TV"
        name="cableTV"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn một lựa chọn!",
          },
        ]}
      >
        <Select placeholder="Có TV không?">
          <Option value="true">Có</Option>
          <Option value="false">Không</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="ID vị trí khách sạn"
        name="locationId"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập ID vị trí khách sạn!",
          },
        ]}
        initialValue="617af2e4da03f39db76165fe"
      >
        <Input defaultValue="617af2e4da03f39db76165fe" />
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
          Cập nhật thông tin phòng cho thuê
        </Button>
      </Form.Item>
    </Form>
  );
}
