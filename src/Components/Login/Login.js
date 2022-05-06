import React from "react";
import { Form, Input, Button } from "antd";
import { userServices } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { setUserInfor } from "../../reducers/userSlice";
import { localStorageServices } from "../../services/localStorageServices";
export default function Login() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServices
      .logIn(values)
      .then((res) => {
        console.log("res", res);
        dispatch(setUserInfor(res.data.user));
        localStorageServices.setUserInfor(res.data.user);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container mx-auto fontFace my-20">
      <div className="flex items-center justify-center">
        <div className="w-[556px] h-[700px]">
          <img
            src="https://i.pinimg.com/564x/4f/4f/6d/4f4f6d78eb37fbeb995efbadf7670fea.jpg"
            alt="photo"
            className="object-cover w-full h-full rounded-l-xl"
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
          </Form>
        </div>
      </div>
    </div>
  );
}
