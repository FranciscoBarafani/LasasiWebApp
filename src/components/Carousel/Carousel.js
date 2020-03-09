import React from "react";
import { Carousel } from "antd";
import banner from "../../assets/images/LasasiBanner.jpg";
import "./Carousel.scss";

export default function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img src={banner} />
      </div>
      <div>
        <h2>Imagen 2</h2>
      </div>
    </Carousel>
  );
}
