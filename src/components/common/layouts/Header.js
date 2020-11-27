import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar">
          <h1 className="navbar__brand">TV Show</h1>
          <ul className="navbar__menu">
            <li className="navbar__item">
            <NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--active"> Home </NavLink>
            </li>
            <li className="navbar__item">
            <NavLink exact to="/shows" className="navbar__link" activeClassName="navbar__link--active"> TV Shows </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
