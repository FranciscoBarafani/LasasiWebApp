//Essentials
import React from "react";
import "./TopicForm.scss";
//Components
import { Form, Button, Input } from "antd";

export default function TopicForm() {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="topic-form">
      <Form name="topicForm" onFinish={onFinish}>
        <Form.Item
          label="Titulo"
          name="title"
          rules={[
            {
              required: true,
              message: "Por favor introduce el titulo del topico"
            }
          ]}
        >
          <Input placeholder="Autor" />
        </Form.Item>
        <Form.Item
          label="Autor"
          name="author"
          rules={[
            {
              required: true,
              message: "Por favor introduce el nombre del autor"
            }
          ]}
        >
          <Input placeholder="Texto" />
        </Form.Item>
        <Form.Item
          label="Texto"
          name="text"
          rules={[
            {
              required: true,
              message: "Por favor introduce el cuerpo del topico"
            }
          ]}
        >
          <Input.TextArea placeholder="Mensaje" style={{ height: 100 }} />
        </Form.Item>
        <Form.Item label="Imagen" name="image" rules={[{ required: false }]}>
          <Input placeholder="Imagen" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Crear/Modificar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
