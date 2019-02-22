import React from "react";
import { NavLink } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const AppHeader = () => (
  <header className="app__header">
    <h1 className="app__title">
      <NavLink to="/">DevWork</NavLink>
    </h1>
    <MainNavigation />
  </header>
);

export default AppHeader;
