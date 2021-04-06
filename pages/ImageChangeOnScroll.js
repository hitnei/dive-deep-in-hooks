import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4, 3, 2, 1, 4].map((imgId, index) => {
        return (
          <ImageToggleOnScroll
            key={index}
            primaryImg={`/static/bw/img${imgId}.jpg`}
            secondaryImg={`/static/img${imgId}.jpg`}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
