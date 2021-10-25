import React from 'react';
import './cardPokemon.css';

export const CardPokemon = ({ pokemon, onClick }) => {
  if (!pokemon) return null;

  let backgroundColor = '#e5e5e5';
  switch (pokemon.type[0]) {
    case 'Stile':
    case 'Dark':
    case 'Rock': {
      backgroundColor = '#A1A1A1';
      break;
    }
    case 'Bug':
    case 'Grass': {
      backgroundColor = '#70A83B';
      break;
    }
    case 'Dragon':
    case 'Fighting':
    case 'Fire': {
      backgroundColor = '#F76545';
      break;
    }
    case 'Ice':
    case 'Water': {
      backgroundColor = '#A2CFF0';
      break;
    }
    case 'Normal':
    case 'Gosth': {
      backgroundColor = '#76AADB';
      break;
    }
    case 'Poison  ':
    case 'Psychic':
    case 'Fairy':
    case 'Ghost': {
      backgroundColor = '#A974BC';
      break;
    }
    case 'Ground': {
      backgroundColor = '#9B897B';
      break;
    }
    case 'Electric': {
      backgroundColor = '#F7C545';
      break;
    }
    default: {
      backgroundColor = '#e5e5e5';
      break;
    }
  }

  return (
    <div className="contenedor" /* onClick={() => onClick && onClick(pokemon.id)} */>
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
      <div className="img-card" style={{ backgroundColor }}>
        <img src={pokemon.hires} className="animation" />
      </div>
    </div>
  );
};
