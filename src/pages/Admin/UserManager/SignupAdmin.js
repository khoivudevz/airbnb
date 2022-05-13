import React, { useState } from "react";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { userManageServices } from "../../../services/userMangeServices";

const { Option } = Select;

export default function SignupAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    let birthday = moment(values.birthday).format("YYYY-MM-DD");
    let data = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      gender: values.gender,
      address: values.address,
      birthday,
      type: "ADMIN",
    };
    userManageServices
      .createUser(data)
      .then((res) => {
        Swal.fire("Thành công!", "Đã thêm quản trị viên !", "success");
        setTimeout(() => {
          setIsModalVisible(false);
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
    <>
      <div
        className="text-xl underline text-deepblue font-bold cursor-pointer"
        type="primary"
        onClick={showModal}
      >
        Thêm quản trị viên
      </div>
      <Modal
        title="Thêm quản trị viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
          >
            <Input />
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
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập password!",
              },
            ]}
          >
            <Input.Password />
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
          >
            <Input />
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
            label="Địa chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Thêm quản trị viên
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
