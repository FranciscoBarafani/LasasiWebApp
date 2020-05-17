//Essentials
import React, { useState, useEffect } from "react";
//Components
import { Form, Input, Button, message, Icon } from "antd";
//Icons
import { ArrowLeftOutlined } from "@ant-design/icons";
//Firebase
import firebase from "../../../utils/FireBase";

import "./EditLink.scss";

const db = firebase.firestore(firebase);

export default function EditLink(props) {
  const { link } = props;
  const [isLoading, setIsLoading] = useState(false);

  //This function updates the selected Link
  const onFinish = (formData) => {
    setIsLoading(true);
    db.collection("links")
      .doc(link.id)
      .update(formData)
      .then(() => {
        setIsLoading(false);
        message.success("Enlace modificado satisfactoriamente");
      })
      .catch(() => {
        setIsLoading(false);
        message.error("Error al modificar enlace, intentelo nuevamente");
      });
  };

  return (
    <div className="edit-link">
      <Form
        onFinish={onFinish}
        initialValues={{
          name: link.name,
          link: link.link,
        }}
      >
        <Button icon={<ArrowLeftOutlined />}>Volver</Button>
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
