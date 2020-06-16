//Essentials
import React from "react";
import "./contact.scss";
//Form Import
import ContactForm from "../../forms/ContactForm";
//Components
import { Row, Col } from "antd";

export default function Contact() {
  return (
    <div className="contact">
      <Row>
        <Col offset={7} span={10}>
          <ContactForm className="contact-form" />
        </Col>
      </Row>
    </div>
  );
}
