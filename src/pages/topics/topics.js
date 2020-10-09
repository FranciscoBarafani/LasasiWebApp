//Essentials
import React, { useEffect, useState } from "react";
//Components
import Loading from "../../components/Loading";
import TopicList from "../../components/Topics/TopicList";
import MyPagination from "../../components/Pagination";
import { each } from "async";
import { Col, Row } from "antd";

//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./topics.scss";

const db = firebase.firestore(firebase);

export default function Topics() {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //This useEffect gets all topics
  useEffect(() => {
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
            setTopics(topics);
            setIsLoading(false);
          }
        );
      });
  }, []);

  //useEffect activates when the Fetch result has loaded
  useEffect(() => {
    if (!isLoading || topics) {
      setTotalItems(topics.length);
      //Assigning starting page as 1
      setCurrentList(topics.slice(0, 4));
    }
  }, [topics, isLoading]);

  //This function is called everytime the page is changed,
  //Slicing the result array in an smaller portion
  const onChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setCurrentList(topics.slice((page - 1) * pageSize, page * pageSize));
    window.scrollTo(0, 0);
  };

  return (
    <div className="topics">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {isLoading || !currentList ? (
            <Loading />
          ) : (
            <TopicList data={currentList} />
          )}
          <MyPagination
            totalItems={totalItems}
            currentPage={currentPage}
            onChangePage={onChangePage}
          />
        </Col>
      </Row>
    </div>
  );
}
