import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import Swal from "sweetalert2";
import { roomServices } from "../../../../services/roomServices";

export default function CreateRoom() {
  const { Option } = Select;
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
    roomServices
      .createRoom(values)
      .then((res) => {
        Swal.fire("Thành công!", "Đã tạo phòng mới!", "success");
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
    <>
      <div
        className="text-xl underline text-deepblue font-bold cursor-pointer"
        type="primary"
        onClick={showModal}
      >
        Tạo phòng cho thuê
      </div>
      <Modal
        title="Tạo phòng cho thuê"
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
            label="Tên khách sạn"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên khách sạn!",
              },
            ]}
          >
            <Input />
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
          >
            <Input />
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
          >
            <Input />
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
          >
            <Input />
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
          >
            <Input />
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
          >
            <Input />
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

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Tạo phòng cho thuê
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
