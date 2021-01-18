import React from "react";

function VideoGrid(props) {
  return (
    <div className="o-grid-container">
      <div className="o-grid-row">
        {props.videos.map((video, index) => (
          <div key={index}>
            <div data-o-grid-colspan="12">
              <div className="demo-cell">
                {video.content.includes("<iframe") ? (
                  <div className="videoWrapper">
                    <div
                      dangerouslySetInnerHTML={{ __html: video.content }}
                    ></div>
                  </div>
                ) : (
                  <video width="300" controls>
                    <source src={video.content} type="video/mp4"></source>
                  </video>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
