import React, { useState, useEffect } from "react";

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
        <h3 key={school.id}>{school.title}</h3>
      ))}
    </div>
  );
}

export default Schools;
