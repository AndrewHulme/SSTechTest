import React from "react";

function SearchBar(props) {
  return (
    <input
      className="p-4 m-4 bg-gray-300 rounded"
      type="text"
      placeholder="Search"
      value={props.search}
      onChange={(e) => props.updateSearch(e.target.value)}
    ></input>
  );
}

export default SearchBar;
