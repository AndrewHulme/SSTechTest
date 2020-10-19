import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar.jsx";
import CardGrid from "./cardGrid.jsx";

function SchoolsList(props) {
  const [search, updateSearch] = useState("");

  let filteredSchools = props.schools.filter((school) => {
    return school.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div>
      <h1>Schools Page</h1>

      <SearchBar search={search} updateSearch={updateSearch} />

      <CardGrid filteredSearch={filteredSchools} page={"schoolsList"} />
    </div>
  );
}

export default SchoolsList;
