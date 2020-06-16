//Essentials
import React from "react";
import "./home.scss";
//Components
import ImageBox from "../../components/ImageBox";
import HomeText from "../../components/HomeText";
import { Col, Row } from "antd";
//Data
import boeingImage from "../../assets/images/boeing-787.jpeg";

export default function Home() {
  return (
    <div className="home">
      <Row>
        <Col span={16} offset={4}>
          <ImageBox alt="Imagen" image={boeingImage} />
          <div className="presentation">
            <HomeText />
          </div>
        </Col>
      </Row>
    </div>
  );
}
