//Essentials
import React from "react";
import "./ContactForm.scss";
import WhatssapIcon from "../../assets/images/svg/WhatsApp-icon.png";

//TODO: Implement the email sending function
export default function ContactForm() {
  return (
    <div className="contact-us">
      <div className="contact-us__layout">
        <img
          className="contact-us__layout-logo"
          src={WhatssapIcon}
          alt="Logo de Whatsapp"
        />
        <a
          href="https://wa.me/5493517862670"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Contactános por Whatsapp</h2>
        </a>
      </div>
    </div>
  );
}
