import React, { useState} from 'react'
//Components
import { Modal, Button } from "antd";
import WebinarImage from "../../assets/images/WebinarLAMIA.jpeg";

import "./InitialModal.scss"
export default function InitialModal() {
    const [showModal, setShowModal] = useState(true);
    
    return (
      
            <Modal
         
             visible={showModal}
            title={"Notificación de Próximo Evento "}
              footer={<Button type="primary" onClick={() => setShowModal(false)}>Aceptar</Button>}
            closable={false}
              >
                    <div className="initial-modal">
                  <div className="image-container">
              <img src={WebinarImage} alt="Webinar Gratuito" />
              </div>
              <a href="https://forms.gle/k3vTs19SfcJn2mks5">
              <Button type="primary">Inscribirse</Button>
              </a>
              </div>
            </Modal>    
       
    )
}
