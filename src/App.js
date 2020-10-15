import React, { Component } from "react";
import "./App.css";
import SchoolsList from "./components/schoolsList.jsx";
import NewsList from "./components/newsList.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/main.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/schools" exact component={SchoolsList} />
          <Route path="/schools/:id/news" component={NewsList} />
        </div>
      </Router>
    );
  }
}

export default App;
