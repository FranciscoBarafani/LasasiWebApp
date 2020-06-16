//Essentials
import React, { useEffect, useState } from "react";
//Components
import Topic from "../../components/Topics/Topic";
import Loading from "../../components/Loading";
import MyPagination from "../../components/Pagination";
import { map } from "lodash";
import { message, Col, Row } from "antd";
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
        map(response.docs, (topic) => {
          const data = topic.data();
          data.key = topic.id;
          topics.push(data);
        });
        setTopics(topics);
        setIsLoading(false);
      })
      .catch(() => {
        message.error("Error al obtener tópicos, intentelo mas tarde.");
        setIsLoading(false);
      });
  }, []);

  //useEffect activates when the Fetch result has loaded
  useEffect(() => {
    if (!isLoading || topics) {
      setTotalItems(topics.length);
      //Assigning starting page as 1
      setCurrentList(topics.slice(0, 2));
    }
  }, [topics, isLoading]);

  //This function is called everytime the page is changed,
  //Slicing the result array in an smaller portion
  const onChangePage = (page, pageSize) => {
    setCurrentPage(page);
    setCurrentList(topics.slice((page - 1) * pageSize, page * pageSize));
  };

  return (
    <div className="topics">
      <Row>
        <Col span={16} offset={4}>
          {isLoading || !currentList ? (
            <Loading />
          ) : (
            currentList.map((topic, index) => (
              <Topic key={index} topic={topic} />
            ))
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
