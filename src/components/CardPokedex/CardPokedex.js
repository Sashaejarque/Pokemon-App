import React from 'react';
import './cardpokedex.css';
import { useFavorites } from '../../hooks/useFavorites';

export const CardPokedex = ({ pokemon, onClickQuitar }) => {
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
    <div className="contenedor-pokedex">
      <div className="title-pokedex">
        <p>{pokemon.name.english}</p>
      </div>
      <div className="photo-pokedex" style={{ backgroundColor }}>
        <img src={pokemon.hires} className="animation-pokedex" />
      </div>
      <div className="info-pokedex">
        <div className="altura-info-pokedex">
          <p className="valor-info-pokedex">{pokemon.profile.height}</p>
          <p className="text-info-pokedex">Altura</p>
        </div>
        <div className="type-pokedex">
          <p className="valor-info-pokedex">{pokemon.type[0]}</p>
          <p className="text-info-pokedex">Type</p>
        </div>
        <div className="peso-info-pokedex">
          <div className="cont-peso-info">
            <p className="valor-info-pokedex">{pokemon.profile.weight}</p>
          </div>
          <div className="cont-peso-info">
            <p className="text-info-pokedex">Peso</p>
          </div>
        </div>
      </div>
      <div className="description-pokedex">
        <p>{pokemon.description}</p>
      </div>
      <div className="quitar-pokedex">
        <div className="quitar-pokedex-info" onClick={onClickQuitar}>
          <p>Quitar de favoritos</p>
        </div>
      </div>
    </div>
  );
};


