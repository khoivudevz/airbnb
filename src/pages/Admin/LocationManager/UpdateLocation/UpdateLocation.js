import React, { useState } from "react";
import { Modal, Button } from "antd";
import { AiFillEdit } from "react-icons/ai";
import FormUpdateLocation from "./FormUpdateLocation";
export default function UpdateLocation({ data, id }) {
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
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <AiFillEdit size={20} />
      </Button>
      <Modal
        title="Cập nhật thông tin vị trí"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormUpdateLocation data={data} id={id} />
      </Modal>
    </>
  );
}
