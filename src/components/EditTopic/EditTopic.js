//Essentials
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
//Config
import { TINY_API_KEY } from "../../utils/TinyMce";
//Components
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";
//Icons
import { ArrowLeftOutlined } from "@ant-design/icons";

import "./EditTopic.scss";

const db = firebase.firestore(firebase);

//TODO: Clean form and text editor after submit

export default function EditTopic(props) {
  const { topicToEdit, setActiveShow } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [editorData, setEditorData] = useState(topicToEdit.body);
  //This state changes if the form has been edited
  const [formEdited, setFormEdited] = useState(false);

  //This functions gets current time, form and editor content and sets it as formData to upload it
  const onFormFinish = async (content) => {
    if (formEdited) {
      setIsLoading(true);
      const editedTopic = {
        title: content.title,
        author: content.author,
        body: editorData,
        time: moment().toDate().toDateString(),
      };
      db.collection("topics")
        .doc(topicToEdit.key)
        .update(editedTopic)
        .then(() => {
          setIsLoading(false);
          message.success("El tópico ha sido modificado satisfactoriamente.");
          setActiveShow("topics");
        })
        .catch(() => {
          setIsLoading(false);
          message.error("Error al modificar tópico, intentelo mas tarde.");
        });
    } else {
      message.error("El tópico no ha sido modificado.");
    }
  };

  //This functions gets the editor content
  const onEditorChange = (content) => {
    setEditorData(content);
  };

  return (
    <div className="new-topic">
      <Button
        onClick={() => setActiveShow("topics")}
        icon={<ArrowLeftOutlined />}
      >
        Volver
      </Button>
      <Form
        onFinish={onFormFinish}
        onChange={() => setFormEdited(true)}
        initialValues={{
          title: topicToEdit.title,
          author: topicToEdit.author,
        }}
      >
        <Form.Item
          label="Título del tópico"
          name="title"
          rules={[{ required: true, message: "Por favor ingresa el título." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nombre del Autor"
          name="author"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre del autor.",
              defaultField: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Editor
            on
            onDirty={() => setFormEdited(true)}
            apiKey={TINY_API_KEY}
            initialValue={topicToEdit.body}
            getContent={(e) => console.log(e)}
            init={{
              height: 500,
              width: 1000,
              menubar: true,

              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
            }}
            onEditorChange={onEditorChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Publicar Cambios
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
