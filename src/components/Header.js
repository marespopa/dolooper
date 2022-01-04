import React from 'react'
import { NavLink } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import AppLogo from '../assets/logo.svg'

const Header = () => (
  <header className="app__header">
    <section className="content">
      <h1 className="app__title">
        <NavLink to="/">
          <img src={AppLogo} alt="DevWork"></img>
        </NavLink>
      </h1>
      <MainNavigation />
    </section>
  </header>
)

export default Header
