//Essentials
import React, { useState, useEffect } from "react";
import "./TopicsManager.scss";
//Components
import { Button, Icon } from "antd";
import Topics from "../../components/Topics";
import NewTopic from "../../components/NewTopic";
import EditTopic from "../../components/EditTopic";

export default function TopicsManager() {
  const [activeShow, setActiveShow] = useState("topics");

  //This functions renders whether the Table with all Topics or the topic editor
  const topicHandler = (render) => {
    switch (render) {
      case "new":
        return <NewTopic />;
      case "edit":
        return <EditTopic />;
      case "topics":
        return <Topics />;
      default:
        break;
    }
  };

  return (
    <div className="topics-manager">
      <div className="topics-manager__menu">
        <Button type="primary" onClick={() => setActiveShow("new")}>
          Nuevo Tópico
        </Button>
        <Button type="primary" onClick={() => setActiveShow("edit")}>
          Editar Tópico
        </Button>
        <Button type="danger">Eliminar Tópico</Button>
      </div>
      <div className="topics-manager__show">{topicHandler(activeShow)}</div>
    </div>
  );
}
