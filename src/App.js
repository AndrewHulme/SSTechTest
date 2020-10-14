import React, { Component } from "react";
import "./App.css";
import Schools from "./components/schools.jsx";
import News from "./components/news.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Schools />
        <News />
      </div>
    );
  }
}

export default App;
