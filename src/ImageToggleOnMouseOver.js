import React, { useRef } from "react";

const ImageChangeOnMouseHover = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      style={{ width: "45%" }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageChangeOnMouseHover;
