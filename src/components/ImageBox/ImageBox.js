import React from "react";
import "./ImageBox.scss";

export default function ImageBox(props) {
  const { image, alt } = props;

  return (
    <div className="image-box">
      <img src={image} alt={alt} />
    </div>
  );
}
