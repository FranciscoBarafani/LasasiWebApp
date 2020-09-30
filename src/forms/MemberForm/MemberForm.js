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
  const [selectedMember, setSelectedMember] = useState(null);
  const [loadingMember, setLoadingMember] = useState(true);
  const { type, setShowModal, selectedMemberId } = props;

  useEffect(() => {
    switch (type) {
      case "new":
        setLoadingMember(false);
        setButtonTitle("Crear Miembro");
        break;
      case "edit":
        setButtonTitle("Editar Cambios");
        if (selectedMemberId) {
          getMember(selectedMemberId);
        }
        break;
      default:
        break;
    }
  }, [type]);

  const getMember = (memberId) => {
    db.collection("members")
      .doc(memberId)
      .get()
      .then((response) => {
        const data = response.data();
        setSelectedMember(data);
      })
      .catch(() => message.error("Error al cargar miembro."))
      .finally(() => setLoadingMember(false));
  };

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

  const editMember = (member, id) => {
    if (member && id) {
      db.collection("members")
        .doc(id)
        .update(member)
        .then(() => message.success("Miembro modificado correctamente."))
        .catch(() => message.error("Error al modificar miembro."))
        .finally(() => {
          setLoading(false);
          setShowModal(false);
        });
    } else {
      message.error("Error al modificar miembro.");
    }
  };

  const onFinish = (response) => {
    setLoading(true);
    if (type === "new") {
      newMember(response);
    } else {
      editMember(response, selectedMemberId);
    }
  };
  return (
    <div className="member-form">
      {!loadingMember ? (
        <>
          <Form
            name="member-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              name="name"
              label="Nombre"
              initialValue={selectedMember?.name}
              rules={[
                { required: true, message: "Por favor introduce el nombre." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Apellido"
              initialValue={selectedMember?.lastName}
              rules={[
                { required: true, message: "Por favor introduce el apellido." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="matNumber"
              label="Número de Matricula"
              initialValue={selectedMember?.matNumber}
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
        </>
      ) : (
        <>Cargando</>
      )}
    </div>
  );
}
