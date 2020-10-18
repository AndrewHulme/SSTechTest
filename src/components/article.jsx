import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paperclip from "../images/paperclip.png";

function Article({ match }) {
  useEffect(() => {
    fetchArticle();
    // console.log(props.match.url);
    // console.log(article);
    console.log(match);
  }, []);

  const [article, setArticle] = useState({});
  const [files, setFiles] = useState([]);

  const fetchArticle = async () => {
    const data = await fetch(`https://api.schoolspider.co.uk/v1${match.url}`);
    const news = await data.json();

    setArticle(news.data);
    setFiles(news.data.files);

    console.log(news.data);
  };

  return (
    <div>
      Article
      {/* <h1 className="text-2xl font-bold">{props.location.state.schoolName}</h1> */}
      <Link to="/schools"> back >> </Link>
      <div className="p-4 m-4 bg-gray-200 rounded">
        <h3 className="text-2xl font-bold">{article.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
      {files.map((file) => (
        <a
          href={file.file}
          className="flex items-center rounded overflow-hidden shadow-lg px-6 py-4"
        >
          <img src={paperclip} className="w-10 h-10 mr-4" />
          <a>{file.title}</a>
        </a>
      ))}
    </div>
  );
}

export default Article;
