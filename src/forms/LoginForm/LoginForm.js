//Essentials
import React from "react";
import "./LoginForm.scss";
//Components
import { Form, Input, Button } from "antd";

//This component renders the Login Form

export default function LoginForm(props) {
  const { onSubmit, isLoading } = props;

  //This function is executed when the form is finished
  const onFinish = (values) => {
    onSubmit(values.email, values.password);
  };

  //Login Form
  return (
    <div className="login">
      <div className="login__form">
        <Form onFinish={onFinish}>
          <Form.Item
            label="Correo Electrónico"
            name="email"
            maxLength={30}
            rules={[
              { required: true, message: "Por favor introduce tu correo..." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            maxLength={16}
            rules={[
              {
                required: true,
                message: "Por favor introduce tu contraseña...",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </div>
  );
}
