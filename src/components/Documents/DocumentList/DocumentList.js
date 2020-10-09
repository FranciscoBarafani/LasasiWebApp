import React, { useState, useEffect } from "react";
//Components
import { Table, Button, Popconfirm, message } from "antd";
import { map } from "lodash";
//Firebase
import firebase from "../../../utils/FireBase";
//Icons
import { DeleteOutlined } from "@ant-design/icons";

//This component is a table that shows all members and has the buttons to delete or edit them

const db = firebase.firestore(firebase);

export default function DocumentList(props) {
  const { setRefresh, refresh } = props;
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  //Gets members when rendered or refreshed
  useEffect(() => {
    getMembers();
  }, [refresh]);

  //Deletes the selected member
  const deleteMember = (id) => {
    if (id) {
      db.collection("documents")
        .doc(id)
        .delete()
        .then(() => {
          message.info("Documento eliminado correctamente");
          setRefresh(!refresh);
        })
        .catch(() => {
          message.info("Error al eliminar documento, intentelo nuevamente.");
        });
    } else {
      message.error("Error al obtener ID del documento seleccionado.");
    }
  };

  //Gets all members from firebase
  const getMembers = () => {
    db.collection("documents")
      .get()
      .then((response) => {
        const documents = [];
        map(response.docs, (response) => {
          const data = response.data();
          data.id = response.id;
          data.key = response.id;
          documents.push(data);
        });
        setDocuments(documents);
      })
      .catch(() => message.error("Error al obtener documentos."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="members-list">
      <Table loading={loading} dataSource={documents}>
        <Table.Column title="Nombre" dataIndex="name" key="key" />
        <Table.Column
          title="Acciones"
          key="actions"
          render={(record) => (
            <div className="links-table__buttons">
              <Popconfirm
                title="Estas seguro que deseas eliminar?"
                okText="Eliminar"
                cancelText="No"
                onConfirm={() => deleteMember(record.key)}
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
