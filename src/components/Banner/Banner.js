//Essentials
import React from "react";
//Assets
import banner from "../../assets/images/LasasiBanner.svg";

import "./Banner.scss";

export default function MyBanner() {
  return <img src={banner} alt="Banner" height={160} width={1000} />;
}
