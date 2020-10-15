import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsList({ match }) {
  useEffect(() => {
    fetchNews();
    console.log(match);
  }, []);

  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      `https://api.schoolspider.co.uk/v1/schools/${match.params.id}/news`
    );
    const newsList = await data.json();

    setNews(newsList.data);
    console.log(newsList.data);
  };

  return (
    <div>
      <h1>News Page</h1>
      <Link to="/schools"> back >> </Link>
      {news.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
}

export default NewsList;
