//Essentials
import React from "react";
//Components
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

import "./error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <Row>
        <Col offset={4} span={16}>
          <h1>Error 404</h1>
          <h2>Pagina no encontrada </h2>
          <Link to="/">
            <h3>Volver al inicio</h3>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
