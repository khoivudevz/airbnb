import React from "react";
import moment from "moment";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { userServices } from "../../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const { Option } = Select;
export default function Signup() {
  let navigate = useNavigate();
  const onFinish = (values) => {
    let birthday = moment(values.birthday).format("YYYY-MM-DD");

    let data = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      gender: values.gender,
      birthday,
    };
    userServices
      .signUp(data)
      .then((res) => {
        Swal.fire(
          "Đăng ký thành công!",
          "Di chuyển đến trang đăng nhập!",
          "success"
        );
        navigate("/login");
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire("Đăng ký thất bạt!", `Lỗi: ${err}`, "error");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container mx-auto fontFace my-32">
      <div className="flex items-center justify-center">
        <div className="w-[556px] h-[800px] ">
          <img
            src="https://i.pinimg.com/564x/28/93/f7/2893f7e127a456c655548bf2040ec41f.jpg"
            alt="photo"
            className="object-cover w-full h-full rounded-l-xl shadow-xl"
          />
        </div>
        <div className="w-[556px] h-[800px] flex items-center justify-center shadow-xl rounded-r-xl">
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Họ và tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ và tên!",
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
                  message: "Vui lòng nhập mật khẩu!",
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
                Đăng ký
              </Button>
            </Form.Item>
            <Link to="/login">
              <div>
                <p>
                  Đã tài khoản? Đi đến trang{" "}
                  <span className="font-bold">đăng nhập</span>
                </p>
              </div>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
