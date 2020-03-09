import React from "react";
import "./TextBox.scss";
import { Row } from "antd";

export default function TextBox(props) {
  const { text } = props;

  return (
    <div className="text-box">
      <Row>
        <h3>{text}</h3>
      </Row>
    </div>
  );
}
