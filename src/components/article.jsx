import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import paperclip from "../images/paperclip.png";
import "../styles/embedVideo.css";

// import ReactPlayer from "react-player";

function Article(props) {
  useEffect(() => {
    fetchArticle();
    // console.log(props.match.url);
    console.log(props);
    console.log(props.match.url.split("/"));
  }, []);

  const [article, setArticle] = useState({});
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentUrl = props.match.url;
  const previousUrl = "/schools/" + currentUrl.split("/")[2] + "/news";

  const fetchArticle = async () => {
    const data = await fetch(`https://api.schoolspider.co.uk/v1${currentUrl}`);
    const news = await data.json();

    setArticle(news.data);
    setFiles(news.data.files);
    setImages(news.data.images);
    setVideos(news.data.videos);

    console.log(news.data);
  };

  const lightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div>
      Article
      <h1 className="text-2xl font-bold">
        {props.findSchool[currentUrl.split("/")[2]]}
      </h1>
      <Link to={previousUrl}> back >> </Link>
      <div className="p-4 m-4 bg-gray-200 rounded">
        <h3 className="text-2xl font-bold">{article.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
      {videos.map((video) => (
        <h1>TEST</h1>
      ))}
      <div className="grid grid-cols-5 gap-3">
        {images.map((image, index) => (
          <img src={image.small} onClick={() => lightbox(index)} />
        ))}
      </div>
      {files.map((file) => (
        <a
          href={file.file}
          className="flex items-center rounded overflow-hidden shadow-lg px-6 py-4"
        >
          <img src={paperclip} className="w-10 h-10 mr-4" />
          <div>{file.title}.pdf</div>
        </a>
      ))}
      <div className="grid grid-cols-2 gap-3">
        {videos.map((video) => (
          <div>
            {video.content.includes("<iframe") ? (
              <div className="videoWrapper">
                <div
                  // className="w-10 h-10"
                  dangerouslySetInnerHTML={{ __html: video.content }}
                ></div>
              </div>
            ) : (
              <video width="300" controls>
                {" "}
                <source src={video.content} type="video/mp4"></source>
              </video>
            )}
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].large}
          nextSrc={images[(photoIndex + 1) % images.length].large}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].large
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default Article;
