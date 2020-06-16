//Essentials
import React from "react";

import "./ContactForm.scss";

//TODO: Implement the email sending function
export default function ContactForm() {
  return (
    <div className="contact-us">
      <div className="contact-us__layout">
        <a
          href="mailto:info@lasasi.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Envíanos un Mail</h2>
        </a>
      </div>
    </div>
  );
}
