//Essentials
import React from "react";
import "./TextBox.scss";
//Components
import { Row } from "antd";

//This component renders a text box

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
