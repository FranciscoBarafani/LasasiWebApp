//Essentials
import React from "react";
//Assets
import banner from "../../assets/images/LasasiBanner.jpg";

import "./Banner.scss";

export default function MyBanner() {
  return (
    <div className="banner">
      <div>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}
