import React, { useState } from "react";
//Components
import { Button } from "antd";
import MembersList from "./MembersList";
import MemberModal from "./MemberModal";

export default function MembersManager() {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("new");

  const handleNewMember = () => {
    setType("new");
    setShowModal(true);
  };

  return (
    <div>
      <h3>Administrador de Miembros</h3>
      <Button onClick={handleNewMember}>Nuevo Miembro</Button>
      <MembersList />
      <MemberModal
        showModal={showModal}
        setShowModal={setShowModal}
        type={type}
      />
    </div>
  );
}
