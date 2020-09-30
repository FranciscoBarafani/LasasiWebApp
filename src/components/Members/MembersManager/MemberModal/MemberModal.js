import React from "react";
//Components
import MemberForm from "../../../../forms/MemberForm";
import { Modal } from "antd";

export default function MemberModal(props) {
  const { showModal, setShowModal, type } = props;

  return (
    <div className="member-modal">
      <Modal
        title="Nuevo Miembro"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <MemberForm type={type} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}
