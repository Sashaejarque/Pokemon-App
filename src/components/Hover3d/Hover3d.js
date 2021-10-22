import React from 'react';
import './hover3d.css';

export const Hover3d = ({ children, width, height, onClickVerMas, onClickFav }) => {
  return (
    <div className="flip-card" style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{children}</div>
        <div class="flip-card-back">
          <div className="verMas" onClick={onClickVerMas}>
            <p>Ver mas</p>
          </div>
          <div className="fav" onClick={onClickFav}>
            <p>Agregar a favoritos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 <h1 onClick={onClickVerMas}>Ver mas</h1>
          <button onClick={onClickVerMas}>Ver mas 2</button> 
*/
