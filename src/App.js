import React, { Component } from "react";
import "./App.css";
import Schools from "./components/schools.jsx";
import News from "./components/news.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/main.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/schools" exact component={Schools} />
          <Route path="/schools/:id/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
