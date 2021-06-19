//Essentials
import React, { useState } from "react";
import "./events.scss";
//Components
import MyCalendar from "../../components/Calendar";
import { Row, Col, Button } from "antd";
import EventFlyer from "../../components/EventFlyer/EventFlyer";
import FormModal from "../../components/FormModal/FormModal"
import webinarImage from "../../assets/images/webinarFlyer.png"
import { useHistory, useParams } from "react-router-dom"

//Assets
import { GOOGLE_CALENDAR } from "../../utils/constants";

export default function Events() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const history = useHistory()
  const params = useParams()

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  return (
    <div className="events">
      <FormModal
        title="Formulario de Inscripción"
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      >
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd08H-R_fUGEmnv7l-fDRVsPFDNpI9mEzakdxUndHccJdZW2w/viewform?embedded=true" width="640" height="1266" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </FormModal>
      <Row justify="center">
        <Col span={24}>
          <h2>Calendario de Eventos</h2>
        </Col>
      </Row>
      <Row justify="center">
        <Button onClick={() => handleOpenModal()} type="primary">Inscribirse al Webinar</Button>
        <Col span={24}>
          <EventFlyer imageSource={webinarImage} alt="Imagen Webinar" />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <MyCalendar source={GOOGLE_CALENDAR} />
        </Col>
      </Row>
    </div>
  );
}
