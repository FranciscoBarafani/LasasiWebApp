//Essentials
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
//Icons
import { ArrowLeftOutlined } from "@ant-design/icons";

//Firebase
import firebase from "../../../utils/FireBase";

import "./NewLink.scss";

const db = firebase.firestore(firebase);

export default function NewLink(props) {
  const { setActiveShow } = props;
  const [isLoading, setIsLoading] = useState(false);

  //This functio uploads the new link
  const onFinish = (formData) => {
    setIsLoading(true);
    formData.link = `https://${formData.link}`;
    db.collection("links")
      .doc()
      .set(formData)
      .then(() => {
        setIsLoading(false);
        message.success("Enlace creado correctamente/");
        setActiveShow("links");
      })
      .catch(() => {
        setIsLoading(false);
        message.error("Error al crear enlace, intentelo nuevamente");
      });
  };

  return (
    <div className="new-link">
      <Form onFinish={onFinish}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => setActiveShow("links")}
        >
          Volver
        </Button>
        <Form.Item
          label="Nombre del enlace"
          name="name"
          key="name"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre del enlace.",
            },
          ]}
        >
          <Input placeholder="Nombre del Enlace" maxLength={50} />
        </Form.Item>
        <Form.Item
          label="Enlace"
          name="link"
          key="link"
          rules={[{ required: true, message: "Por favor ingresa el enlace." }]}
        >
          <Input placeholder="Enlace" maxLength={100} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={isLoading}>
            Crear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
