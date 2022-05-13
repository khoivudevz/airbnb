import React, { useState } from "react";
import { Modal, Button } from "antd";
import { AiFillEdit } from "react-icons/ai";
import FormUpdateInfor from "./FormUpdateInfor";

export default function UpdateInfor({ data, id }) {
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
        title="Cập nhật thông tin"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormUpdateInfor data={data} id={id} />
      </Modal>
    </>
  );
}
