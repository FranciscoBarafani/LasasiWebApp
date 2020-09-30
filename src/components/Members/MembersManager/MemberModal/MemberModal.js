import React from "react";
//Components
import MemberForm from "../../../../forms/MemberForm";
import { Modal } from "antd";

//This modal shows the member form whether it is for editing or creating a new member

export default function MemberModal(props) {
  const { showModal, setShowModal, type, selectedMemberId, setRefresh } = props;

  return (
    <div className="member-modal">
      <Modal
        title="Nuevo Miembro"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        destroyOnClose={true}
        afterClose={() => setRefresh(true)}
      >
        <MemberForm
          type={type}
          setShowModal={setShowModal}
          selectedMemberId={selectedMemberId}
        />
      </Modal>
    </div>
  );
}
