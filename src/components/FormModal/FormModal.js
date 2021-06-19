import React from 'react'
import { Modal } from "antd"
import "./FormModal.scss"

export default function FormModal({ title, isModalVisible, handleOk, handleCancel, children }) {
  return (
    <Modal
      className="form-modal"
      onCancel={handleCancel}
      title={title} visible={isModalVisible}
      footer={null}
      width={850}
    >
      {children}
    </Modal>
  )
}
