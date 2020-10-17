import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Article(props) {
  useEffect(() => {
    fetchArticle();
    // console.log(props.match.url);
    // console.log(article);
  }, []);

  const [article, setArticle] = useState({});
  const [files, setFiles] = useState([]);

  const fetchArticle = async () => {
    const data = await fetch(
      `https://api.schoolspider.co.uk/v1${props.match.url}`
    );
    const news = await data.json();

    setArticle(news.data);
    setFiles(news.data.files);

    console.log(news.data);
  };

  return (
    <div>
      Article
      <h1 className="text-2xl font-bold">{props.location.state.schoolName}</h1>
      <Link to="/schools"> back >> </Link>
      <div className="p-4 m-4 bg-gray-200 rounded">
        <h3 className="text-2xl font-bold">{article.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
      <div className="rounded overflow-hidden shadow-lg px-6 py-4">
        {files.map((file) => (
          <a href={file.file}>{file.title}</a>
        ))}
      </div>
    </div>
  );
}

export default Article;
