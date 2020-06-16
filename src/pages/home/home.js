//Essentials
import React from "react";
import "./home.scss";
//Components
import HomeText from "../../components/HomeText";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className="home">
      <Row>
        <Col span={16} offset={4}>
          <div className="presentation">
            <HomeText />
          </div>
        </Col>
      </Row>
    </div>
  );
}
