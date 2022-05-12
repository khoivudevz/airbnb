import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Avatar,
  Modal,
  Tabs,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Space } from "antd";
import { FiLogOut } from "react-icons/fi";
import { localStorageServices } from "../../services/localStorageServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { userManageServices } from "../../services/userMangeServices";
import { removeAdminInfor } from "../../reducers/adminSlice";
const { TabPane } = Tabs;
const { Option } = Select;
export default function UserManager() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let adminInfor = useSelector((state) => state.adminSlice.adminInfor);
  const [usersData, setUsersData] = useState(null);
  const [roomsData, setRoomsData] = useState(null);
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

  useEffect(() => {
    if (adminInfor.type !== "ADMIN") {
      dispatch(removeAdminInfor());
      localStorageServices.removeAdminInfor();
      localStorageServices.removeAminToken();
      Swal.fire(
        "Tài khoản không đủ thẩm quyền",
        "Trở về trang đăng nhập!",
        "error"
      );
      navigate("/admin");
    }
  }, []);

  function callback(key) {
    // console.log(key);
  }

  let handleLogOut = () => {
    localStorageServices.removeAdminInfor();
    dispatch(removeAdminInfor());
    Swal.fire("Đăng xuất thành công", "Trở về trang đăng nhập!", "success");
    navigate("/admin");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              onClick={handleLogOut}
              className="fontFace flex items-center justify-start space-x-2"
            >
              <FiLogOut /> <p>Đăng xuất</p>
            </div>
          ),
        },
      ]}
    />
  );
  const onFinish = (values) => {
    let birthday = moment(values.birthday).format("YYYY-MM-DD");
    let data = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      gender: values.gender,
      birthday,
      type: "ADMIN",
    };
    userManageServices
      .createUser(data)
      .then((res) => {
        Swal.fire("Thành công!", "Đã thêm quản trị viên !", "success");
        setTimeout(() => {
          setIsModalVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen">
      <div className="h-[10%] shadow-xl bg-deepblue">
        <div className="w-full h-full container mx-auto flex items-center justify-end space-x-3 ">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p className="fontFace text-white">{adminInfor?.email}</p>{" "}
                <Avatar size={38} icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div></div>
      </div>
      <div className="h-[90%] py-20">
        <Tabs onChange={callback} type="card" tabPosition="left">
          <TabPane tab="Quản lý người dùng" key="1">
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
                    name="username"
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
            <p>Content of Tab Pane 1</p>
          </TabPane>
          <TabPane tab="Quản lý thông tin vị trí" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Quản lý thông tin phòng" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
