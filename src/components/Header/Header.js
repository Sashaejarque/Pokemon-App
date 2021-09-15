import React from "react";
import "./header.css";
import Logo from "./Logo.png";

export const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
        <img id="1" src={Logo} className="logo"/> 
        </div>
        <div className="nav-botton">
          <ul>
            <li>Home</li>
            <li>Pokedex</li>
            <li>Legendary</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
