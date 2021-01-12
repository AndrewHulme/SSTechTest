import React, { useState, useEffect } from "react";
import SchoolsList from "./components/schoolsList.jsx";
import NewsList from "./components/newsList.jsx";
import Article from "./components/article.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "react-image-lightbox/style.css";

function App() {
  useEffect(() => {
    fetchSchools();
  }, []);

  const [schools, setSchools] = useState([]);
  const [findSchool, setFindSchool] = useState({});

  const fetchSchools = async () => {
    const data = await fetch("https://api.schoolspider.co.uk/v1/schools");
    const schoolsList = await data.json();
    setSchools(schoolsList.data);

    let schoolsObject = {};
    schoolsList.data.forEach(
      (school) => (schoolsObject[school.id] = school.title)
    );
    setFindSchool(schoolsObject);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/schools" />
          </Route>

          <Route
            path="/schools"
            exact
            render={(props) => <SchoolsList {...props} schools={schools} />}
          />
          <Route
            path="/schools/:id/news/:id"
            render={(props) => <Article {...props} findSchool={findSchool} />}
          />
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
