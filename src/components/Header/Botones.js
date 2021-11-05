import React from 'react';
import { Route, Routes, BrowserRouter, Link, useNavigate } from 'react-router-dom';

const Botones = () => {
  return (
    <div>
      <nav className="nav-botton">
        <ul className="nav-links">
          <Link to="https://sashaejarque.github.io/Pokemon-App/home" style={{ textDecoration: 'none' }}>
            <p className="link">Home</p>
          </Link>
          <Link to="https://sashaejarque.github.io/Pokemon-App/pokedex" style={{ textDecoration: 'none' }}>
            <p className="link">Pokedex</p>
          </Link>
          <Link to="https://sashaejarque.github.io/Pokemon-App/home" style={{ textDecoration: 'none' }}>
            <p className="link">Documentation</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Botones;
