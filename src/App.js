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

  const fetchSchools = async () => {
    const data = await fetch("https://api.schoolspider.co.uk/v1/schools");

    const schoolsList = await data.json();
    console.log(schoolsList.data);

    setSchools(schoolsList.data);
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
          <Route path="/schools/:id/news" component={NewsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
