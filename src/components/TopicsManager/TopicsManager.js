//Essentials
import React, { useState } from "react";
import "./TopicsManager.scss";
//Components
import Loading from "../../components/Loading";
import Actions from "../../components/Actions";
import Topics from "../../components/Topics";
import NewTopic from "../../components/NewTopic";
import EditTopic from "../../components/EditTopic";

export default function TopicsManager() {
  const [activeShow, setActiveShow] = useState("new");

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

  return <div className="topics-manager">{topicHandler(activeShow)}</div>;
}
