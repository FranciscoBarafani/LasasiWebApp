//Essentials
import React from "react";
//Components
import { Row, Col } from "antd";

import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <Row>
        <Col offset={4} span={16}>
          <h1>About</h1>
        </Col>
      </Row>
    </div>
  );
}
