import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import SchoolTitle from "./schoolTitle.jsx";
import BackButton from "./backButton.jsx";
import ArticleText from "./articleText.jsx";
import paperclip from "../images/paperclip.png";
import "../styles/embedVideo.css";

function Article(props) {
  useEffect(() => {
    fetchArticle();
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
  };

  const lightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div>
      <SchoolTitle title={props.findSchool[currentUrl.split("/")[2]]} />

      <BackButton url={previousUrl} />

      <ArticleText article={article} />

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
