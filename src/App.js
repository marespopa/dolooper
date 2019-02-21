import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import AppFooter from "./components/AppFooter";

import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
