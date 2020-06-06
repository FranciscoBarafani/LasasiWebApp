//Essentials
import React, { useState, useEffect } from "react";
import firebase from "../../utils/FireBase";
import "firebase/firestore";
//Components
import { Table, message, Button, Popconfirm } from "antd";
import { map } from "lodash";
import Loading from "../Loading";
//Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./Topics.scss";

const db = firebase.firestore(firebase);

export default function Topics(props) {
  const { setActiveShow, setSelectedTopic } = props;
  const [refresh, setRefresh] = useState(false);
  const [topics, setTopics] = useState([]);
  const [isLoading, setisLoading] = useState(true);

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
        setisLoading(false);
      })
      .catch(() => {
        message.error("Error al obtener tópicos, intente mas tarde.");
      });
  }, [refresh]);

  //Edit Button Click, gets the unique ID from the selected Topic
  const onEditButtonClick = (topic) => {
    setSelectedTopic(topic);
    setActiveShow("edit");
  };

  //This function eliminates the selected topic
  const deleteTopic = (id) => {
    db.collection("topics")
      .doc(id)
      .delete()
      .then(() => {
        message.info("El tópico ha sido eliminado.");
        setRefresh(!refresh);
      })
      .catch(() => {
        message.error("Error al eliminar tópico, intentelo nuevamente.");
      });
  };

  return (
    <div className="topics">
      {!isLoading ? (
        <Table dataSource={topics} className="topics-table">
          <Table.Column title="Titulo" dataIndex="title" key="id" />
          <Table.Column title="Autor" dataIndex="author" key="author" />
          <Table.Column title="Fecha de Creación" dataIndex="time" key="time" />
          <Table.Column
            title="Acciones"
            key="actions"
            render={(record) => (
              <div className="topics-table__buttons">
                <Button
                  type="secondary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => onEditButtonClick(record)}
                />
                <Popconfirm
                  title="Estas seguro que deseas eliminar?"
                  okText="Eliminar"
                  cancelText="No"
                  onConfirm={() => deleteTopic(record.key)}
                >
                  <Button
                    type="danger"
                    shape="circle"
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              </div>
            )}
          />
        </Table>
      ) : (
        <Loading />
      )}
    </div>
  );
}
