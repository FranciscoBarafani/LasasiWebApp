//Essentials
import React from "react";
import "./Carousel.scss";
//Components
import { Carousel } from "antd";
//Assets
import banner from "../../assets/images/LasasiBanner.jpg";

export default function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img src={banner} alt="Banner" />
      </div>
      <div>
        <h2>Imagen 2</h2>
      </div>
    </Carousel>
  );
}
