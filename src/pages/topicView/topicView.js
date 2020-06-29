import React, { useEffect, useState } from "react";
//Components
import { useParams } from "react-router-dom";
import Topic from "../../components/Topics/Topic";
import Loading from "../../components/Loading";
import { message, Row, Col } from "antd";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./topicView.scss";

const db = firebase.firestore(firebase);

export default function TopicView() {
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //Getting Url Params
  const { id } = useParams();

  useEffect(() => {
    db.collection("topics")
      .doc(id)
      .get()
      .then((response) => {
        const topic = response.data();
        setTopic(topic);
        setIsLoading(false);
      })
      .catch(() =>
        message.error("Error al cargar tópico, por favor intentelo mas tarde.")
      );
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : (
    <Row justify="center">
      <Col xs={22} sm={22} md={18} lg={18} xl={18}>
        <Topic topic={topic} />
      </Col>
    </Row>
  );
}
