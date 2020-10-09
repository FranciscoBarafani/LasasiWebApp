import React, { useState, useEffect } from "react";
//Components
import { Document as Doc } from "react-pdf/dist/esm/entry.webpack";
import { Page } from "react-pdf";
import { Button } from "antd";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../utils/FireBase";

import "./document.scss";

const db = firebase.firestore(firebase);

export default function Document() {
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [document, setDocument] = useState("");
  const params = useParams();

  //Firebase References
  const storageRef = firebase.storage().ref();

  useEffect(() => {
    getDocument();
  }, []);

  //Gets the selected document by id
  const getDocument = () => {
    db.collection("documents")
      .doc(params.id)
      .get()
      .then((response) => {
        const doc = response.data();
        const documentRef = storageRef.child(`documents/${doc.file}`);
        documentRef.getDownloadURL().then((response) => {
          setDocument(response);
          setLoading(false);
        });
      });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="document">
      {loading && !numPages ? (
        <Loading />
      ) : (
        <>
          <Doc file={document} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1000} />
          </Doc>
          <div className="document_buttons">
            <Button disabled={pageNumber <= 1} onClick={previousPage}>
              Anterior
            </Button>
            <Button disabled={pageNumber >= numPages} onClick={nextPage}>
              Siguiente
            </Button>
          </div>
          <p>
            Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
          </p>
        </>
      )}
    </div>
  );
}
