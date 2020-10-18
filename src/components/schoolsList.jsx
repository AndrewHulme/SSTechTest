import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar.jsx";
// import Card from "./card.jsx";
// import "../styles/main.css";

function SchoolsList(props) {
  // const test = (hello) => {
  //   console.log("yo");
  //   updateSearch(hello);
  // };

  const [search, updateSearch] = useState("");

  let filteredSchools = props.schools.filter((school) => {
    return school.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div>
      <h1>Schools Page</h1>

      <SearchBar search={search} updateSearch={updateSearch} />

      <div className="grid grid-cols-3 gap-4">
        {filteredSchools.map((school) => (
          <div key={school.id} className="p-4 m-4 bg-gray-200 rounded">
            <h3>{school.title}</h3>
            <Link
              to={{
                pathname: `/schools/${school.id}/news`,
                state: { schoolName: school.title },
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

export default SchoolsList;
