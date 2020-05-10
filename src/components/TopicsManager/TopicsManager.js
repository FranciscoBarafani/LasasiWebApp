//Essentials
import React, { useState, useEffect } from "react";
import "./TopicsManager.scss";
//Components
import { Button } from "antd";
import Topics from "../../components/Topics";
import NewTopic from "../../components/NewTopic";
import EditTopic from "../../components/EditTopic";

export default function TopicsManager() {
  const [activeShow, setActiveShow] = useState("topics");
  const [selectedTopic, setSelectedTopic] = useState(null);

  //This functions renders whether the Table with all Topics or the topic editor
  const topicHandler = (render) => {
    switch (render) {
      case "new":
        return <NewTopic setActiveShow={setActiveShow} />;
      case "edit":
        return (
          <EditTopic
            topicToEdit={selectedTopic}
            setActiveShow={setActiveShow}
          />
        );
      case "topics":
        return (
          <Topics
            setActiveShow={setActiveShow}
            setSelectedTopic={setSelectedTopic}
          />
        );
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
      </div>
      <div className="topics-manager__show">{topicHandler(activeShow)}</div>
    </div>
  );
}
