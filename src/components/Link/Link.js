import React from "react";
import "./Link.scss";

export default function MyLink(props) {
  const { name, address } = props;

  return (
    <div className="link">
      <h2>{name}</h2>
      <h3>{address}</h3>
    </div>
  );
}
