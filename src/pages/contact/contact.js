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
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ContactForm className="contact-form" />
        </Col>
      </Row>
    </div>
  );
}
