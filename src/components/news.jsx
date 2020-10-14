import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function News({ match }) {
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

    console.log(newsList);
  };

  return (
    <div>
      <h1>News Page</h1>
      <Link to="/schools"> back >> </Link>
    </div>
  );
}

export default News;
