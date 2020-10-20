import React from "react";

function VideoGrid(props) {
  return (
    <div className="grid grid-cols-2 gap-3 m-4">
      {props.videos.map((video) => (
        <div>
          {video.content.includes("<iframe") ? (
            <div className="videoWrapper">
              <div dangerouslySetInnerHTML={{ __html: video.content }}></div>
            </div>
          ) : (
            <video width="300" controls>
              <source src={video.content} type="video/mp4"></source>
            </video>
          )}
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
