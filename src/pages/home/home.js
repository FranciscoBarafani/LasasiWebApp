//Essentials
import React from "react";
import "./home.scss";
//Components
import TextBox from "../../components/TextBox";
import ImageBox from "../../components/ImageBox";
//Data
import { homeText } from "../../assets/texts/texts";
import boeingImage from "../../assets/images/boeing-787.jpeg";

export default function Home() {
  return (
    <div className="home">
      <ImageBox alt="Imagen" image={boeingImage} />
      <TextBox text={homeText} />
    </div>
  );
}
