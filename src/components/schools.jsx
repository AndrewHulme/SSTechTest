import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../styles/main.css";

function Schools() {
  useEffect(() => {
    fetchSchools();
  }, []);

  const [schools, setSchools] = useState([]);

  const fetchSchools = async () => {
    const data = await fetch("https://api.schoolspider.co.uk/v1/schools");

    const schoolsList = await data.json();
    console.log(schoolsList.data);

    setSchools(schoolsList.data);
  };

  return (
    <div>
      <h1>Schools Page</h1>
      {schools.map((school) => (
        <div key={school.id} className="p-4 m-4 bg-gray-200 rounded">
          <h3>
            <Link to={`/schools/${school.id}/news`}>{school.title}</Link>{" "}
          </h3>
          <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            view >
          </button>
        </div>
      ))}
    </div>
  );
}

export default Schools;
