import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsList(props) {
  useEffect(() => {
    fetchNews();
    // console.log(match);
    console.log(props);
  }, []);

  // const schoolName = ;
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      `https://api.schoolspider.co.uk/v1/schools/${props.match.params.id}/news`
    );
    const newsList = await data.json();

    setNews(newsList.data);
    console.log(newsList.data);
  };

  return (
    <div>
      <h1>News Page</h1>
      {/* <h1 className="text-2xl font-bold">{props.location.state.schoolName}</h1> */}
      <Link to="/schools"> back >> </Link>

      <div className="grid grid-cols-3 gap-4">
        {news.map((article) => (
          <div key={article.id} className="p-4 m-4 bg-gray-200 rounded">
            <h3>{article.title}</h3>
            <Link
              to={{
                pathname: `/schools/${props.match.params.id}/news/${article.id}`,
                // state: { schoolName: props.location.state.schoolName },
              }}
            >
              <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                view >
              </button>
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
