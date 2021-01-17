import React from "react";

function SearchBar(props) {
  return (
    <div
      id="o-header-search"
      class="o-header__row o-header__search o--if-js"
      role="search"
    >
      <input
        className="o-header__search-term"
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={(e) => props.updateSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
