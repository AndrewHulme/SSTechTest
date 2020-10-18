import React, { useState, useEffect } from "react";
import "./App.css";
import SchoolsList from "./components/schoolsList.jsx";
import NewsList from "./components/newsList.jsx";
import Article from "./components/article.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";

function App() {
  useEffect(() => {
    fetchSchools();
  }, []);

  const [schools, setSchools] = useState([]);
  const [findSchool, setFindSchool] = useState({});

  const fetchSchools = async () => {
    const data = await fetch("https://api.schoolspider.co.uk/v1/schools");

    const schoolsList = await data.json();
    console.log(schoolsList.data);

    setSchools(schoolsList.data);

    let schoolsObject = {};
    schoolsList.data.forEach(
      (school) => (schoolsObject[school.id] = school.title)
    );
    setFindSchool(schoolsObject);

    // console.log(schools);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/schools"
            exact
            render={(props) => <SchoolsList {...props} schools={schools} />}
          />
          <Route path="/schools/:id/news/:id" component={Article} />
          <Route
            path="/schools/:id/news"
            render={(props) => <NewsList {...props} findSchool={findSchool} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
