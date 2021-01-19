import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import SchoolTitle from "./schoolTitle.jsx";
import ArticleText from "./articleText.jsx";
import ImageGrid from "./imageGrid.jsx";
import FilesList from "./filesList.jsx";
import VideoGrid from "./videoGrid.jsx";
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

      <ArticleText article={article} />

      <ImageGrid images={images} lightbox={lightbox} />

      <FilesList files={files} />

      <VideoGrid videos={videos} />

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
