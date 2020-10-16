import React, { Component } from "react";
import "./App.css";
import SchoolsList from "./components/schoolsList.jsx";
import NewsList from "./components/newsList.jsx";
import Article from "./components/article.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/schools" exact component={SchoolsList} />
            <Route path="/schools/:id/news/:id" component={Article} />
            <Route path="/schools/:id/news" component={NewsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
