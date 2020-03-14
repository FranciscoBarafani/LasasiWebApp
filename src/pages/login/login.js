//Essentials
import React from "react";
import "./login.scss";
//Form Import
import ContactForm from "../../forms/LoginForm";
import LoginForm from "../../forms/LoginForm";

export default function Login() {
  return (
    <div className="login">
        <LoginForm className="login-form"/>
    </div>
  );
}