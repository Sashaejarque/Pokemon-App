import React from 'react';
import { useState } from 'react';
import './header2.css';
import Icon from './BurgenBtn.png';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';

export const Header2 = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showDiv = () => {
    if (showLinks === false) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  return (
    <div className="headerContainer">
      <div className="leftContainer">
        <img src={Logo} className="logoFull" />
        <img src={Logo} className="logoResponsive" />
      </div>
      <div className="rigthContainer">
        <div className="linkContainer">
          <Link to="/home" style={{ textDecoration: 'none', fontSize:25 }}>
            <p className="link">Home</p>
          </Link>
          <Link to="/pokedex" style={{ textDecoration: 'none',fontSize:25 }}>
            <p className="link">Pokedex</p>
          </Link>
          <Link to="/home" style={{ textDecoration: 'none',fontSize:25 }}>
            <p className="link">Documentation</p>
          </Link>
        </div>
        <div className="divoculto" id={showLinks ? 'hidden' : ''}>
          <div className="linkcontainerHidden">
            <Link to="/home" style={{ textDecoration: 'none', fontFamily: 'Karla' }}>
              <p className="link">Home</p>
            </Link>
            <Link to="/pokedex" style={{ textDecoration: 'none' }}>
              <p className="link">Pokedex</p>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <p className="link">Documentation</p>
            </Link>
          </div>
        </div>
        <div className="iconContainer">
          <img src={Icon} className="iconHeader" onClick={showDiv} />
        </div>
      </div>
    </div>
  );
};
