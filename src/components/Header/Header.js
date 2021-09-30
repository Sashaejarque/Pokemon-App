import React from 'react';
import './header.css';
import Logo from './Logo';
import Botones from './Botones';

export const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Logo />
      </div>
      <Botones />
    </div>
  );
};
