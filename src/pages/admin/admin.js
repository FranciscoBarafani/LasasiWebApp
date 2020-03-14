//Essentials
import React from "react";
import "./admin.scss";
//Components
import SideMenu from "../../components/SideMenu";

//Forms
import NewTopicForm from "../../forms/NewTopic";

export default function Admin() {
  return (
    <div className="admin">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="content">
        <NewTopicForm />
      </div>
    </div>
  );
}
