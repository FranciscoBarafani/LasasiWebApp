//Essentials
import React from "react";
import "./Link.scss";

//This component renders small boxes with a Link

export default function MyLink(props) {
  const { name, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="link">
        <h2>{name}</h2>
        <h3>{link}</h3>
      </div>
    </a>
  );
}
