import React from "react";
import { connect } from "react-redux";

//Components
import TopicCard from "../TopicCard";
import { List } from "antd";

function TopicList(props) {
  const { currentList } = props;

  return (
    <div>
      {currentList.length > 0 ? (
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 4, xl: 4 }}
          dataSource={currentList}
          renderItem={(item) => (
            <List.Item>
              <TopicCard
                title={item.title}
                author={item.author}
                id={item.key}
              />
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentList: state.topics.currentList,
});

export default connect(mapStateToProps)(TopicList);
