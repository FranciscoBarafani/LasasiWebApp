//Essentials
import React from "react";
import "./home.scss";
//Components
import ImageBox from "../../components/ImageBox";
import HomeText from "../../components/HomeText";
//Data
import boeingImage from "../../assets/images/boeing-787.jpeg";

export default function Home() {
  return (
    <div className="home">
      <ImageBox alt="Imagen" image={boeingImage} />
      <HomeText />
    </div>
  );
}
