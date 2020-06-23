//Essentials
import React from "react";
//Assets
import banner from "../../assets/images/LasasiBanner.svg";

export default function MyBanner() {
  return (
    <img
      src={banner}
      alt="Banner"
      style={{
        width: "100%",
        maxWidth: 1000,
        height: "auto",
      }}
    />
  );
}
