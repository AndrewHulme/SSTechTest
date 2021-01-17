import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar.jsx";
import CardGrid from "./cardGrid.jsx";
import SchoolTitle from "./schoolTitle.jsx";

function NewsList(props) {
  useEffect(() => {
    fetchNews();
  }, []);

  const [news, setNews] = useState([]);
  const [search, updateSearch] = useState("");

  const fetchNews = async () => {
    const data = await fetch(
      `https://api.schoolspider.co.uk/v1${props.match.url}`
    );
    const newsList = await data.json();
    setNews(newsList.data);
  };

  let filteredNews = news.filter((article) => {
    return article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div>
      <SearchBar search={search} updateSearch={updateSearch} />

      <SchoolTitle title={props.findSchool[props.match.params.id]} />

      <CardGrid
        filteredSearch={filteredNews}
        page={"newsList"}
        schoolId={props.match.params.id}
      />
    </div>
  );
}

export default NewsList;
