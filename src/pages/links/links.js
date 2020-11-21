//Essentials
import React, { useState, useEffect } from "react";
//Components
import MyLink from "../../components/Links/Link";
import Loading from "../../components/Loading";
import { message, Col, Row } from "antd";
import { map } from "lodash";
//REDUX
import { connect, useDispatch } from "react-redux";
import { getLinks } from "../../redux/actions/actions";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./links.scss";

const db = firebase.firestore(firebase);

function Links(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //This function gets all links
  useEffect(() => {
    if (props.links.length <= 1) {
      setIsLoading(true);
      const linksArray = [];
      db.collection("links")
        .get()
        .then((response) => {
          map(response.docs, (doc) => {
            const data = doc.data();
            data.id = doc.id;
            linksArray.push(data);
          });
        })
        .catch(() => {
          message.error("Error al obtener enlaces, intentelo nuevamente.");
        })
        .finally(() => {
          dispatch(getLinks(linksArray));
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="links">
      <Row justify="center">
        <Col xs={20} sm={20} md={10} lg={10} xl={10}>
          <div className="links__label">
            <h1>Enlaces</h1>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          {isLoading ? (
            <Loading />
          ) : (
            map(props.links, (link) => (
              <MyLink name={link.name} link={link.link} key={link.key} />
            ))
          )}
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  links: state.links.links,
});

const mapDispatchToProps = {
  getLinks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
