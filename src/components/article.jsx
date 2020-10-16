import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Article({ match }) {
  useEffect(() => {
    fetchArticle();
    // console.log(match.url);
    // console.log(article);
  }, []);

  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    const data = await fetch(`https://api.schoolspider.co.uk/v1${match.url}`);
    const news = await data.json();

    setArticle(news.data);
    console.log(news.data);
  };

  return (
    <div>
      Article
      <Link to="/schools"> back >> </Link>
      <div className="p-4 m-4 bg-gray-200 rounded">
        <h3>{article.title}</h3>

        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
    </div>
  );
}

export default Article;
