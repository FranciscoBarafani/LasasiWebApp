import React, { useState, useEffect } from "react";
//Components
import { Table, Button, Popconfirm, message } from "antd";
import { map } from "lodash";
//Firebase
import firebase from "../../../../utils/FireBase";
//Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

//This component is a table that shows all members and has the buttons to delete or edit them

const db = firebase.firestore(firebase);

export default function MembersList(props) {
  const { handleEditMember, setRefresh, refresh } = props;
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);

  //Gets members when rendered or refreshed
  useEffect(() => {
    getMembers();
  }, [refresh]);

  //Deletes the selected member
  const deleteMember = (id) => {
    if (id) {
      db.collection("members")
        .doc(id)
        .delete()
        .then(() => {
          message.info("Miembro eliminado correctamente");
          setRefresh(!refresh);
        })
        .catch(() => {
          message.info("Error al eliminar miembro, intentelo nuevamente.");
        });
    } else {
      message.error("Error al obtener ID del miembro seleccionado.");
    }
  };

  //Gets all members from firebase
  const getMembers = () => {
    db.collection("members")
      .get()
      .then((response) => {
        const members = [];
        map(response.docs, (response) => {
          const data = response.data();
          data.id = response.id;
          data.key = response.id;
          members.push(data);
        });
        setMembers(members);
      })
      .catch(() => message.error("Error al obtener miembros."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="members-list">
      <Table loading={loading} dataSource={members}>
        <Table.Column title="Nombre" dataIndex="name" key="key" />
        <Table.Column title="Apellido" dataIndex="lastName" />
        <Table.Column title="Matrícula" dataIndex="matNumber" />
        <Table.Column
          title="Acciones"
          key="actions"
          render={(record) => (
            <div className="links-table__buttons">
              <Button
                type="secondary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => handleEditMember(record.id)}
              />
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
