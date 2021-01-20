import React from "react";

function ImageGrid(props) {
  return (
    <div className="o-grid-container">
      <div className="o-grid-row">
        {props.images.map((image, index) => (
          <div key={index} data-o-grid-colspan="2">
            <div id={"image" + index} className="demo-cell">
              <img
                key={index}
                src={image.small}
                alt={""}
                onClick={() => props.lightbox(index)}
              />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
