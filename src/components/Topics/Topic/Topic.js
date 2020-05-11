//Essentials
import React from "react";
import "./Topic.scss";

//This component renders a box with a Topic

export default function Topic(props) {
  const {
    topic: { title, image, alt, body, author }
  } = props;
  return (
    <div className="topic">
      <h1>{title}</h1>
      <div>
        <img src={image} alt={alt} />
      </div>
      <h3>{body}</h3>
      <h4>{author}</h4>
    </div>
  );
}
