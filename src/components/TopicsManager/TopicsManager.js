//Essentials
import React from "react";
import "./TopicsManager.scss";
//Components
import useFetch from "../../hooks/useFetch";
import { Table } from "antd";
import Loading from "../../components/Loading";
import Actions from "../../components/Actions";
//Constants
import { GET_TOPICS } from "../../utils/constants";

export default function TopicsManager() {
  //Topics Fetching
  const topics = useFetch(GET_TOPICS, null);
  const { result, loading } = topics;

  //The table layout is set as an Array
  const { Column } = Table;

  return (
    <div className="topics-manager">
      {loading || !result ? (
        <Loading />
      ) : (
        <div className="topics-manager-dashboard">
          <h2>Administrador de Topicos</h2>
          <Table dataSource={result}>
            <Column title="Titulo" dataIndex="title" key="title" />
            <Column title="Autor" dataIndex="author" key="author" />
            <Column title="Acciones" key="action" render={Actions} />
          </Table>
        </div>
      )}
    </div>
  );
}
