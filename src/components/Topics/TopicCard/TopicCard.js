import React from "react";
//Components
import { Card } from "antd";

import "./TopicCard.scss";

export default function TopicCard(props) {
  const { title, author, id } = props;

  return (
    <a href={`/main/topics/${id}`}>
      <Card title={title}>
        <p>Autor: {author}</p>
      </Card>
    </a>
  );
}
