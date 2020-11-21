//Essentials
import React, { useEffect, useState } from "react";
//Components
import Loading from "../../components/Loading";
import TopicList from "../../components/Topics/TopicList";
import MyPagination from "../../components/Pagination";
import { each } from "async";
import { Col, Row } from "antd";
//Redux
import { connect, useDispatch } from "react-redux";
import {
  getTopics,
  setCurrentTopicList,
  setTotalItemsTopics,
  changeTopicsPage,
} from "../../redux/actions/actions";

//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./topics.scss";

const db = firebase.firestore(firebase);

function Topics(props) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //This useEffect gets all topics
  useEffect(() => {
    //This conditional prevents to load topics every time the component is rendered
    if (props.topics.length <= 1) {
      setIsLoading(true);
      db.collection("topics")
        .get()
        .then((response) => {
          const topics = [];
          each(
            response.docs,
            (topic, callback) => {
              const data = topic.data();
              data.key = topic.id;
              topics.push(data);
              callback();
            },
            () => {
              dispatch(getTopics(topics));
              dispatch(setTotalItemsTopics(topics.length));
              //Assigning starting page as 1
              dispatch(setCurrentTopicList(topics.slice(0, 4)));
              setIsLoading(false);
            }
          );
        });
    }
  }, []);

  //This function is called everytime the page is changed,
  //Slicing the result array in an smaller portion
  const onChangePage = (page, pageSize) => {
    dispatch(changeTopicsPage(page));
    dispatch(
      setCurrentTopicList(
        props.topics.slice((page - 1) * pageSize, page * pageSize)
      )
    );
    window.scrollTo(0, 0);
  };

  return (
    <div className="topics">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <TopicList />
              <MyPagination
                totalItems={props.totalItems}
                currentPage={props.currentPage}
                onChangePage={onChangePage}
              />
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

//Es llamado cada vez que el store cambia, renderizando nuevamente el store,
//los datos definidos se pasan como props al componente
const mapStateToProps = (state) => ({
  topics: state.topics.topics,
  currentPage: state.topics.currentPage,
  totalItems: state.topics.totalItems,
});

const mapDispatchToProps = {
  getTopics,
  setCurrentTopicList,
  setTotalItemsTopics,
  changeTopicsPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
