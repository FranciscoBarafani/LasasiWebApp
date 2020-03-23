//Essentials
import React, { useState } from "react";
import "./TopicsManager.scss";
//Components
import useFetch from "../../hooks/useFetch";
import { Table } from "antd";
import Loading from "../../components/Loading";
import Actions from "../../components/Actions";
//Constants
import { GET_TOPICS } from "../../utils/constants";
//Forms
import TopicForm from "../../forms/TopicForm";

export default function TopicsManager() {
  //Topics Fetching
  const topics = useFetch(GET_TOPICS, null);
  const { result, loading } = topics;
  //This is a flag that shows or hides the Topic form wheter we choose to
  //create or modify one
  const [showForm, setShowForm] = useState(false);

  //The table layout is set as an Array
  const { Column } = Table;

  return (
    <div className="topics-manager">
      {loading || !result ? (
        <Loading />
      ) : (
        <div className="topics-manager-dashboard">
          {!showForm ? (
            <div>
              <h2>Administrador de Topicos</h2>
              <Table dataSource={result}>
                <Column title="Titulo" dataIndex="title" key="title" />
                <Column title="Autor" dataIndex="author" key="author" />
                <Column title="Acciones" key="action" render={Actions} />
              </Table>
            </div>
          ) : (
            <div>
              <TopicForm />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
