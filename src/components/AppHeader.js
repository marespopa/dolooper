import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => (
  <header className="app__header">
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/add-task">Create Task</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default AppHeader;
