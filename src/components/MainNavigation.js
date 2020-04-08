import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => (
  <nav className='main-navigation'>
    <ul>
      <li>
        <NavLink to='/tasks'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/add-task'>Create Task</NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
