import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import Swal from "sweetalert2";
import { localStorageServices } from "../../../../services/localStorageServices";
export default function CreateLocation() {
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
    let data = { ...values, valueate: 8 };
    localStorageServices
      .CreateLocation(data)
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
        Tạo vị trí
      </div>
      <Modal
        title="Tạo vị trí"
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
            label="Tên vị trí"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên vị trí!",
              },
            ]}
          >
            <Input />
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
          >
            <Input />
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
              Tạo vị trí
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
