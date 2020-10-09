import React, { useState } from "react";
//Components
import { Form, Button, Input, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";
import "firebase/storage";

import "./DocumentForm.scss";

const db = firebase.firestore(firebase);

export default function DocumentForm(props) {
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState([]);
  const { setShowModal } = props;

  //Firebase reference
  const storageRef = firebase.storage().ref();

  const { Dragger } = Upload;

  const onFinish = (response) => {
    uploadDocument(response.name, response.document.file.originFileObj);
  };

  const uploadDocument = (name, file) => {
    setLoading(true);
    var document = { name: name, file: file.uid };
    const documentRef = storageRef.child(`documents/${file.uid}`);
    console.log(name, file);
    console.log(document);
    //Upload Document First
    documentRef
      .put(file)
      .then(() => {
        //After the document is uploaded we proceed to create a document database object to link with it
        db.collection("documents")
          .add(document)
          .then(() => message.success("Documento subido correctamente."))
          .catch(() => message.error("Error al crear documento."));
      })
      .catch(() => message.error("Error al subir documento"))
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  };

  //Checks if the selected file is pdf format.
  const onChange = (info) => {
    if (info.file.type !== "application/pdf") {
      message.error("El documento no es PDF.");
      setDocument([]);
    } else {
      setDocument(info.fileList);
    }
  };

  //This function is to override the automatic POST request sent by
  //antd Uploader, to avoid uploading images until form is done
  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className="document-form">
      <Form
        name="document-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: "Por favor introduce el nombre del documento.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="document"
          rules={[
            {
              required: true,
              message: "Por favor seleccione un documento.",
            },
          ]}
        >
          <Dragger
            onChange={onChange}
            customRequest={dummyRequest}
            multiple={false}
            fileList={document}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Haz click o arrastra tu pdf</p>
            <p className="ant-upload-hint">Solo un documento</p>
          </Dragger>
        </Form.Item>
        <div className="document-form__btn">
          <Form.Item>
            <Button htmlType="submit" type="primary" loading={loading}>
              Subir Documento
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
