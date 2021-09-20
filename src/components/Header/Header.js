import React from 'react';
import './header.css';
import Logo from './Logo';

export const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Logo />
      </div>
      <nav className="nav-botton">
        <ul className="nav-links">
          <li>Home</li>
          <li>Pokedex</li>
          <li>Legendaries</li>
          <li>Documentation</li>
        </ul>
      </nav>
    </div>
  );
};
