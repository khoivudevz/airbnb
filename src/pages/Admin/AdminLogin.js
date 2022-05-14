import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { userServices } from "../../services/userServices";
import { localStorageServices } from "../../services/localStorageServices";
import {
  setAdminAvatar,
  setAdminInfor,
  setAdminToken,
} from "../../reducers/adminSlice";

export default function AdminLogin() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServices
      .logIn(values)
      .then((res) => {
        dispatch(setAdminInfor(res.data.user));
        localStorageServices.setAdminInfor(res.data.user);
        dispatch(setAdminToken(res.data.token));
        localStorageServices.setAdminToken(res.data.token);
        if (res.data.user.avatar) {
          dispatch(setAdminAvatar(res.data.user.avatar));
          localStorageServices.setAdminAVATAR(res.data.user.avatar);
        }
        Swal.fire(
          "Đăng nhập thành công!",
          "Di chuyển đến trang quản lý!",
          "success"
        );
        navigate("/admin/home");
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire("Đăng nhập thất bạt!", `Lỗi: ${err}`, "error");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto flex items-center justify-center h-full w-full">
        <div>
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
              label="Password"
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
