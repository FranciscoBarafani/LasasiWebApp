//Essentials
import React from "react";
import "./Carousel.scss";
//Components
import { Carousel } from "antd";
//Assets
import banner from "../../assets/images/LasasiBanner.jpg";

export default function MyCarousel() {
  return (
    <div className="carousel">
      <Carousel>
        <div>
          <img
            src={banner}
            alt="Banner"
            style={{ width: "100%", padding: "0 20%" }}
          />
        </div>
      </Carousel>
    </div>
  );
}
