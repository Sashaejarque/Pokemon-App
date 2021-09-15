import React from "react";
import "./cardPokemon.css";

export const CardPokemon = ({ pokemon }) => {
  return (
    <div className="contenedor">
      <div className="content">
        <div className="name-card">
          <p>{pokemon.name.english}</p>
        </div>
        <div className="at-def-card">
          <div className="at">
            <p className="circle">{pokemon.base.Attack}</p>
            <p className="description">Attack</p>
          </div>
          <div className="def">
            <p className="circle">{pokemon.base.Defense}</p>
            <p className="description">Defense</p>
          </div>
        </div>
        <div className="type-card">
          {pokemon.type.map((pokemonType) => (
            <p className="type-chip">{pokemonType}</p>
          ))}
        </div>
      </div>
      <div className="img-card">
        <img src={pokemon.hires} className="animation" />
      </div>
    </div>
  );
};
