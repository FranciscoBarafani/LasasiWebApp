import React, { useEffect, useState } from "react";
//Components
import { Link } from "react-router-dom";
import { List } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import firebase from "../../utils/FireBase";
import async from "async";

import "./documents.scss";

const db = firebase.firestore(firebase);

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = () => {
    db.collection("documents")
      .get()
      .then((response) => {
        var docs = [];
        async.each(
          response.docs,
          (document, callback) => {
            var doc = document.data();
            doc.id = document.id;
            docs.push(doc);
            callback();
          },
          () => {
            setDocuments(docs);
            setLoading(false);
          }
        );
      });
  };

  return (
    <div className="documents">
      <List
        header={
          <div>
            <h3>Documentos</h3>
          </div>
        }
        bordered
        dataSource={documents}
        loading={loading}
        renderItem={(item) => (
          <>
            <List.Item>
              <div className="documents__list-item">
                <p>{item.name}</p>
                <Link to={`/main/document/${item.id}`}>
                  <FilePdfOutlined style={{ fontSize: 20 }} />{" "}
                </Link>
              </div>
            </List.Item>
          </>
        )}
      />
    </div>
  );
}
