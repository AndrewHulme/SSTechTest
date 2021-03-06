import React, { useState } from "react";
import SearchBar from "./searchBar.jsx";
import CardGrid from "./cardGrid.jsx";
import { filter } from "./filter";

function SchoolsList(props) {
  const [search, updateSearch] = useState("");

  let filteredSchools = filter(props.schools, search);

  return (
    <div>
      {props.showSearchBar === true && (
        <SearchBar search={search} updateSearch={updateSearch} />
      )}
      <CardGrid filteredSearch={filteredSchools} page={"schoolsList"} />
    </div>
  );
}

export default SchoolsList;
