//Essentials
import React from "react";
//Components
import { Row, Col } from "antd";
//Assets
import banner from "../../assets/images/LasasiBanner.jpg";

import "./Banner.scss";

export default function MyBanner() {
  return (
    <div className="banner">
      <Row>
        <Col offset={4} span={16}>
          <div>
            <img src={banner} alt="Banner" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
