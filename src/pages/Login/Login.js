import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userServices } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { setUserAvatar, setUserInfor } from "../../reducers/userSlice";
import { localStorageServices } from "../../services/localStorageServices";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServices
      .logIn(values)
      .then((res) => {
        console.log("res", res);
        dispatch(setUserInfor(res.data.user));
        localStorageServices.setUserInfor(res.data.user);
        localStorageServices.setToken(res.data.token);
        if (res.data.user.avatar) {
          dispatch(setUserAvatar(res.data.user.avatar));
        }
        Swal.fire(
          "Đăng nhập thành công!",
          "Di chuyển đến trang chủ!",
          "success"
        );
        navigate("/");
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
    <div className="container mx-auto fontFace my-32">
      <div className="flex items-center justify-center">
        <div className="hidden md:block w-[556px] h-[700px] ">
          <img
            src="https://i.pinimg.com/564x/4f/4f/6d/4f4f6d78eb37fbeb995efbadf7670fea.jpg"
            alt="photo"
            className="object-cover w-full h-full rounded-l-xl shadow-xl"
          />
        </div>
        <div className="w-[556px] h-[700px] flex items-center justify-center shadow-xl rounded-r-xl">
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
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
            <Link to="/signup">
              <div>
                <p>
                  Chưa có tài khoản? Đi đến trang{" "}
                  <span className="font-bold">đăng ký</span>
                </p>
              </div>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
