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

import "./NewTopic.scss";

const db = firebase.firestore(firebase);

//TODO: Clean form and text editor after submit

export default function NewTopic(props) {
  const { setActiveShow } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [editorData, setEditorData] = useState("");

  //This functions gets current time, form and editor content and sets it as formData for later upload
  const onFormFinish = async (content) => {
    if (editorData) {
      const topic = {
        title: content.title,
        author: content.author,
        body: editorData,
        time: moment().toDate().toDateString(),
      };
      uploadTopic(topic);
    } else {
      message.warn("El texto del tópico no puede estar vacío.");
    }
  };

  //This function uploads the new topic to firebase database
  const uploadTopic = (topic) => {
    setIsLoading(true);
    db.collection("topics")
      .add(topic)
      .then(() => {
        message.success("Tópico publicado satisfactoriamente.");
        setIsLoading(false);
        setActiveShow("topics");
      })
      .catch(() => {
        message.error("Error al publicar tópico, intentelo mas tarde.");
        setIsLoading(false);
      });
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
      <Form onFinish={onFormFinish}>
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
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Editor
            on
            apiKey={TINY_API_KEY}
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
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
