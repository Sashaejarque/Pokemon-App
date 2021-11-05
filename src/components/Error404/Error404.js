import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo404 } from './Logo404';
import './error404.css';
import logo404 from './Team_Rocket_trio_OS 1.png';

export const Error404 = () => {
  let navigate = useNavigate();
  let redirectHome = () => {
    navigate('https://sashaejarque.github.io/Pokemon-App');
  };

  return (
    <>
      <div className="container-404">
        <div className="pp-404">
          <p className="p-404">404</p>
        </div>
        <div className="p2-404">
          <p className="p2-404-a">The rocket team &nbsp;</p>

          <p className="p2-404-b">has won this time</p>
        </div>
        <button onClick={redirectHome} className="button-404">
          Return
        </button>
      </div>
      <div className="container-abs">
        <img src={logo404} className="logo-404-1" height={623} width={690} />
      </div>
    </>
  );
};
