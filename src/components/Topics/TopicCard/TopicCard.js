import React from "react";
//Components
import { Card } from "antd";
import { Link } from "react-router-dom";

import "./TopicCard.scss";

export default function TopicCard(props) {
  const { title, author, id } = props;

  return (
    <div className="topic-card">
      <Link to={`/main/topics/${id}`}>
        <Card title={title}>
          <p>Autor: {author}</p>
        </Card>
      </Link>
    </div>
  );
}
