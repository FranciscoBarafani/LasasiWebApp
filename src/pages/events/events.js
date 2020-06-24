//Essentials
import React from "react";
import "./events.scss";
//Components
import MyCalendar from "../../components/Calendar";
import { Row, Col } from "antd";

//Assets
import { GOOGLE_CALENDAR } from "../../utils/constants";

export default function Events() {
  return (
    <div className="events">
      <Row justify="center">
        <Col span={24}>
          <h2>Calendario de Eventos</h2>
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
