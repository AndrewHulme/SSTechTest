import React from "react";

function ImageGrid(props) {
  return (
    <div className="grid grid-cols-5 gap-3 m-4">
      {props.images.map((image, index) => (
        <img src={image.small} onClick={() => props.lightbox(index)} />
      ))}
    </div>
  );
}

export default ImageGrid;
