import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseHover = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/img1.jpg"
        secondaryImg="/static/img1.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/img2.jpg"
        secondaryImg="/static/img2.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseHover;
