import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <>
            <Header />
            <MainContainer />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
