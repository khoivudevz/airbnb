import React from "react";
import { Button, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { userManageServices } from "../../../../../services/userMangeServices";

const { Option } = Select;

export default function FormUpdateInfor({ data, id }) {
  const onFinish = (values) => {
    console.log("values", values);
    let birthday = moment(values.birthday).format("YYYY-MM-DD");
    let data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      gender: values.gender,
      birthday,
      type: values.type,
      address: values.address,
    };
    userManageServices
      .updateUser(id, data)
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
        label="Tên người dùng"
        name="name"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên người dùng!",
          },
        ]}
        initialValue={data.name}
      >
        <Input defaultValue={data.name} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email!",
          },
        ]}
        initialValue={data.email}
      >
        <Input defaultValue={data.email} />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số điện thoại!",
          },
        ]}
        initialValue={data.phone}
      >
        <Input defaultValue={data.phone} />
      </Form.Item>

      <Form.Item
        label="Ngày sinh"
        name="birthdayMoment"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn ngày sinh!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Giới tính"
        name="gender"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn giới tính!",
          },
        ]}
      >
        <Select placeholder="Chọn giới tính">
          <Option value="true">Nam</Option>
          <Option value="false">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Role"
        name="type"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn Role!",
          },
        ]}
      >
        <Select placeholder="Chọn Role">
          <Option value="CLIENT">CLIENT</Option>
          <Option value="ADMIN">ADMIN</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập địa chỉ!",
          },
        ]}
        initialValue={data.address}
      >
        <Input defaultValue={data.address} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Cập nhật thông tin
        </Button>
      </Form.Item>
    </Form>
  );
}
