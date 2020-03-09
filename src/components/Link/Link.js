import React from "react";
import "./Link.scss";

export default function MyLink(props) {
  const { name, address } = props;

  return (
    <a href={address} target="_blank" rel="noopener noreferrer">
      <div className="link">
        <h2>{name}</h2>
        <h3>{address}</h3>
      </div>
    </a>
  );
}
