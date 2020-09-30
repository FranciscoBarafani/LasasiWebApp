import React, { useState } from "react";
//Components
import { Button } from "antd";
import MembersList from "./MembersList";
import MemberModal from "./MemberModal";

import "./MembersManager.scss";

//Renders the Members Manager, including the modal, form and table.

export default function MembersManager() {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("new");
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  //Refresh state is used to refresh the table once a member is created or edited
  const [refresh, setRefresh] = useState(false);

  //Handles when new member button is clicked
  const handleNewMember = () => {
    setType("new");
    setShowModal(true);
  };

  //Handdles when edit button is clicked
  const handleEditMember = (memberId) => {
    setType("edit");
    setSelectedMemberId(memberId);
    setShowModal(true);
  };

  return (
    <div className="members-manager">
      <Button onClick={handleNewMember} type="primary">
        Nuevo Miembro
      </Button>
      <MembersList
        handleEditMember={handleEditMember}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <MemberModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedMemberId={selectedMemberId}
        type={type}
        setRefresh={setRefresh}
      />
    </div>
  );
}
