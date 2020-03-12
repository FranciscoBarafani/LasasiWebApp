//Essentials
import React from "react";
import "./contact.scss";
//Form Import
import ContactForm from "../../forms/ContactForm";

export default function Contact() {
  return (
    <div className="contact">
      <ContactForm className="contact-form" />
    </div>
  );
}
