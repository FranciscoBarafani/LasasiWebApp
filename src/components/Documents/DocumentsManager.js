import React, { useState } from "react";
//Components
import { Button } from "antd";
import DocumentModal from "./DocumentModal";
import DocumentList from "./DocumentList";

import "./DocumentsManager.scss";

export default function DocumentsManager() {
  const [showModal, setShowModal] = useState(false);
  //Refresh state is used to refresh the table once a member is created or edited
  const [refresh, setRefresh] = useState(false);

  //Handles when new member button is clicked
  const handleNewDocument = () => {
    setShowModal(true);
  };

  return (
    <div className="documents-manager">
      <Button type="primary" onClick={handleNewDocument}>
        Nuevo Documento
      </Button>
      <DocumentList setRefresh={setRefresh} refresh={refresh} />
      <DocumentModal
        showModal={showModal}
        setShowModal={setShowModal}
        setRefresh={setRefresh}
      />
    </div>
  );
}
