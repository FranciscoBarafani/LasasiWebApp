//Essentials
import React, { useState, useEffect } from "react";
//Components
import MyLink from "../../components/Links/Link";
import Loading from "../../components/Loading";
import { message } from "antd";
import { map } from "lodash";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/firestore";

import "./links.scss";

const db = firebase.firestore(firebase);

export default function Links() {
  const [links, setLinks] = useState(null);

  //This function gets all links
  useEffect(() => {
    db.collection("links")
      .get()
      .then((response) => {
        const linksArray = [];
        map(response.docs, (doc) => {
          const data = doc.data();
          data.id = doc.id;
          linksArray.push(data);
        });
        setLinks(linksArray);
      })
      .catch(() => {
        message.error("Error al obtener enlaces, intentelo nuevamente.");
      });
  }, []);

  return (
    <div className="links">
      <h1>Enlaces</h1>
      {links ? (
        map(links, (link) => (
          <MyLink name={link.name} link={link.link} key={link.key} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
