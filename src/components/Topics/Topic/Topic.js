//Essentials
import React from "react";
import "./Topic.scss";
//Components
import Interweave from "interweave";

//This component renders a box with a Topic

export default function Topic(props) {
  const {
    topic: { title, time, body, author },
  } = props;

  return (
    <div className="topic">
      <h1>{title}</h1>
      <div className="topic-body">
        <Interweave content={body} />
      </div>
      <div className="topic-footer">
        <h5>{author}</h5>
        <h5>{time}</h5>
      </div>
    </div>
  );
}
