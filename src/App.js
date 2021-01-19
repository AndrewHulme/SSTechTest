import React, { useState, useEffect } from "react";
import SchoolsList from "./components/schoolsList.jsx";
import NewsList from "./components/newsList.jsx";
import Article from "./components/article.jsx";
import NavBar from "./components/navBar.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.css";
import "./styles/custom.css";
import "./styles/main.css";
import "react-image-lightbox/style.css";

function App() {
  useEffect(() => {
    fetchSchools();
  }, []);

  const [schools, setSchools] = useState([]);
  const [findSchool, setFindSchool] = useState({});
  const [showSearchBar, setShowSearchBar] = useState(false);

  const fetchSchools = async () => {
    const data = await fetch("https://api.schoolspider.co.uk/v1/schools");
    const schoolsList = await data.json();
    setSchools(schoolsList.data);

    console.log(schoolsList.data);

    let schoolsObject = {};
    schoolsList.data.forEach(
      (school) => (schoolsObject[school.id] = school.title)
    );
    setFindSchool(schoolsObject);
  };

  return (
    <Router>
      <div className="App">
        <NavBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />

        <Switch>
          <Route exact path="/">
            <Redirect to="/schools" />
          </Route>

          <Route
            path="/schools"
            exact
            render={(props) => (
              <SchoolsList
                {...props}
                schools={schools}
                showSearchBar={showSearchBar}
              />
            )}
          />
          <Route
            path="/schools/:id/news/:id"
            render={(props) => <Article {...props} findSchool={findSchool} />}
          />
          <Route
            path="/schools/:id/news"
            render={(props) => (
              <NewsList
                {...props}
                findSchool={findSchool}
                showSearchBar={showSearchBar}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
