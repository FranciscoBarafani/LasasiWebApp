import React from "react";
import "./topics.scss";
import Topic from "../../components/Topic";
import { topicText, topicText2 } from "../../assets/texts/texts";

//Test Images
import image1 from "../../assets/images/jetTurbine.jpg";
import image2 from "../../assets/images/boeing777.jpg";

export default function Topics() {
  //TODO: Import Topics from a GET and Map them, Paginate it too
  return (
    <div className="topics">
      <Topic
        title="Topico de Prueba"
        body={topicText}
        author="Barafani Bros"
        image={image1}
      />
      <Topic
        title="Topico de Prueba 2"
        body={topicText2}
        author="Barafani Software Solutions"
        image={image2}
      />
    </div>
  );
}
