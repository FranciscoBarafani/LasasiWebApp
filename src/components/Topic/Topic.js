import React from "react";
import "./Topic.scss";

export default function Topic(props) {
  const { title, image, alt, body, author } = props;

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
