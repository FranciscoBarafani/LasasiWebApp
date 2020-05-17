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

export default function Links(props) {
  const { setSelectedLink, setActiveShow } = props;
  const [links, setLinks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //This function gets all links
  useEffect(() => {
    db.collection("links")
      .get()
      .then((response) => {
        const linksArray = [];
        map(response.docs, (link) => {
          const data = link.data();
          data.id = link.id;
          data.key = link.id;
          linksArray.push(data);
        });
        setLinks(linksArray);
      })
      .catch(() => {
        message.error("Error al obtener enlaces, intentelo nuevamente");
      });
  }, [refresh]);

  //This functions opens the Link editor once clicked
  const onEditButtonClick = (link) => {
    setSelectedLink(link);
    setActiveShow("edit");
  };

  //This function deletes the selected link
  const deleteLink = (id) => {
    if (id) {
      db.collection("links")
        .doc(id)
        .delete()
        .then(() => {
          message.info("Enlace eliminado correctamente");
          setRefresh(!refresh);
        })
        .catch(() => {
          message.info("Error al eliminar enlace, intentelo nuevamente.");
        });
    } else {
      message.error("Error al obtener ID del enlace seleccionado.");
    }
  };

  return (
    <div className="links">
      <Table dataSource={links} className="links-table">
        <Table.Column title="Nombre" dataIndex="name" key="key" />
        <Table.Column title="Enlace" dataIndex="link" />
        <Table.Column
          title="Acciones"
          key="actions"
          render={(record) => (
            <div className="links-table__buttons">
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
                onConfirm={() => deleteLink(record.key)}
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
