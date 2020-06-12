//Essentials
import React from "react";
//Components
import { MailOutlined } from "@ant-design/icons";

import "./ContactForm.scss";

//TODO: Implement the email sending function
export default function ContactForm() {
  return (
    <div className="contact-us">
      <div className="contact-us__layout">
        <MailOutlined />
        <a
          href="mailto:dbarafani@yahoo.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Envíanos un Mail</h2>
        </a>
      </div>
    </div>
  );
}
