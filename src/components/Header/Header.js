import React from "react";
import "./header.css";
import Logo from "./logo.jpeg";

export const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
        <img id="1" src={Logo} className="logo"/> 
        </div>
        <div className="nav-botton">2</div>
      </div>
    </div>
  );
};
