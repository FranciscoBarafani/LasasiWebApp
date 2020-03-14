//Essentials
import React from "react";
import "./LoginForm.scss";
//Components
import { Form, Button, Input } from "antd";


export default function LoginForm() {
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
        <div className="login-form">
            <Form name="loginForm" {...layout}>
                <Form.Item
                    label="Nombre de Usuario"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Por favor introduce tu nombre de usuario."
                        }
                    ]}
                >
                    <Input placeholder="Nombre de usuario" />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Por favor introduzca su contraseña."
                        }
                    ]}
                >   <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary">Enviar</Button>
                </Form.Item>
            </Form>
        </div>
    );
}