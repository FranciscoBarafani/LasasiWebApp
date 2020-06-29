import React from "react";

//Components
import TopicCard from "../TopicCard";
import { List } from "antd";

export default function TopicList(props) {
  const { data } = props;

  return (
    <div>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 4, xl: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <TopicCard title={item.title} author={item.author} id={item.key} />
          </List.Item>
        )}
      />
    </div>
  );
}
