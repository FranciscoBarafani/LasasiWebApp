import React, { useState, useEffect } from "react";
//Components
import { Form, Button, Input, message } from "antd";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./MemberForm.scss";

const db = firebase.firestore(firebase);

export default function MemberForm(props) {
  const [loading, setLoading] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("");
  const { type, setShowModal } = props;

  useEffect(() => {
    switch (type) {
      case "new":
        setButtonTitle("Crear Miembro");
        break;
      case "edit":
        setButtonTitle("Editar Cambios");
        break;
      default:
        break;
    }
  }, [type]);

  const newMember = (member) => {
    db.collection("members")
      .add(member)
      .then(() => message.success("Miembro creado correctamente."))
      .catch(() => message.error("Error al crear miembro."))
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  };

  const editMember = (name, lastName, matNumber) => {};

  const onFinish = (response) => {
    setLoading(true);
    if (type === "new") {
      newMember(response);
    } else {
      editMember(response);
    }
  };
  return (
    <div className="member-form">
      <Form
        name="member-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            { required: true, message: "Por favor introduce el nombre." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Apellido"
          rules={[
            { required: true, message: "Por favor introduce el apellido." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="matNumber"
          label="Número de Matricula"
          rules={[
            {
              required: true,
              message: "Por favor introduce el número de matrícula",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="member-form__btn">
          <Form.Item>
            <Button htmlType="submit" type="primary" loading={loading}>
              {buttonTitle}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
