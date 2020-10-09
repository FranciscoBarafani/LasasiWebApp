import React from "react";
//Components
import DocumentForm from "../../../forms/DocumentForm";
import { Modal } from "antd";

//This modal shows the member form whether it is for editing or creating a new member

export default function DocumentModal(props) {
  const { showModal, setShowModal, setRefresh } = props;

  return (
    <div className="member-modal">
      <Modal
        title="Nuevo Documento"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        destroyOnClose={true}
        afterClose={() => setRefresh(true)}
      >
        <DocumentForm setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}
