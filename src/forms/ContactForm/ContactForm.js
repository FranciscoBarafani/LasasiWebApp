//Essentials
import React from "react";
import "./ContactForm.scss";
//Components
import { Form, Button, Input } from "antd";

//TODO: Implement the email sending function

export default function ContactForm() {
  //Label Layout
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  //Button Layout
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  return (
    <div className="contact-form">
      <Form name="contactForm" {...layout}>
        <Form.Item
          label="Nombre y Apellido"
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu nombre y apellido"
            }
          ]}
        >
          <Input placeholder="Nombre y Apellido" />
        </Form.Item>
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu correo electronico"
            }
          ]}
        >
          <Input placeholder="Correo Electronico" />
        </Form.Item>
        <Form.Item
          label="Mensaje"
          name="message"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu mensaje"
            }
          ]}
        >
          <Input.TextArea placeholder="Mensaje" style={{ height: 100 }} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary">Enviar</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
