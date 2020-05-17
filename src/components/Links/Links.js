//Essentials
import React, { useState, useEffect } from "react";
//Components
import { Table, Button, Popconfirm, message } from "antd";
import { map } from "lodash";
//Firebase
import firebase from "../../utils/FireBase";
//Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./Links.scss";

const db = firebase.firestore(firebase);

export default function Links() {
  const [links, setLinks] = useState([]);

  //This function gets all links
  useEffect(() => {
    db.collection("links")
      .get()
      .then((response) => {
        const linksArray = [];
        map(response.docs, (link) => {
          const data = link.data();
          data.id = link.id;
          linksArray.push(data);
        });
        setLinks(linksArray);
      })
      .catch(() => {
        message.error("Error al obtener enlaces, intentelo nuevamente");
      });
  }, []);

  return (
    <div className="links">
      <Table dataSource={links} className="links-table">
        <Table.Column title="Nombre" dataIndex="name" key="id" />
        <Table.Column title="Enlace" dataIndex="link" key="link" />
        <Table.Column
          title="Acciones"
          key="actions"
          render={(record) => (
            <div className="topics-table__buttons">
              <Button
                type="secondary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => console.log(record)}
              />
              <Popconfirm
                title="Estas seguro que deseas eliminar?"
                okText="Eliminar"
                cancelText="No"
                onConfirm={() => console.log(record.key)}
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
    </div>
  );
}
