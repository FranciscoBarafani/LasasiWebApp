//Essentials
import React, { useState, useEffect } from "react";
import firebase from "../../utils/FireBase";
import "firebase/firestore";
//Components
import { Table, message } from "antd";
import { map } from "lodash";

import "./Topics.scss";

const db = firebase.firestore(firebase);

export default function Topics() {
  const [topics, setTopics] = useState([]);

  //Get Topics
  useEffect(() => {
    db.collection("topics")
      .get()
      .then((response) => {
        const topics = [];
        map(response.docs, (topic) => {
          const data = topic.data();
          data.key = topic.id;
          topics.push(data);
        });
        setTopics(topics);
      })
      .catch(() => {
        message.error("Error al obtener tópicos, intente mas tarde.");
      });
  }, []);

  return (
    <Table dataSource={topics}>
      <Table.Column title="Titulo" dataIndex="title" key="id" />
      <Table.Column title="Autor" dataIndex="author" key="author" />
      <Table.Column title="Fecha de Creación" dataIndex="time" key="time" />
    </Table>
  );
}
