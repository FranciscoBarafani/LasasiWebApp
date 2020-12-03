import React, { useState } from "react";
//Components
import { Modal, Button, Input } from "antd";
import WebinarImage from "../../assets/images/WebinarLAMIA.jpeg";

import "./InitialModal.scss";
export default function InitialModal() {
  const [showModal, setShowModal] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const password = "lasasi2020";

  const handlePassword = (input) => {
    if (input === password) setButtonDisabled(false);
  };

  return (
    <Modal
      visible={showModal}
      title={"Elecciones LASASI"}
      footer={
        <Button type="primary" onClick={() => setShowModal(false)}>
          Aceptar
        </Button>
      }
      closable={false}
    >
      <div className="initial-modal">
        <div className="image-container">
          <img src={WebinarImage} alt="Webinar Gratuito" />
        </div>
        <div
          className="initial-modal-inputcontainer"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <p>Ingrese Contraseña para votar / Enter Password to vote</p>
          <Input.Password
            placeholder="Contraseña/Password"
            onChange={(event) => handlePassword(event.target.value)}
          />
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYF1M0J5HoMn-I01HE5oCxkW4TtxAqpy1Pf8Nt02wpigirAg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628">
          <Button type="primary" disabled={buttonDisabled}>
            VOTAR / VOTE
          </Button>
        </a>
      </div>
    </Modal>
  );
}
