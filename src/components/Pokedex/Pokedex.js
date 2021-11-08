import React from 'react';
import './pokedex.css';
import { useFavorites } from '../../hooks/useFavorites';
import { Texto } from '../Texto/Texto';
import { CardPokedex } from '../CardPokedex/CardPokedex';
import { Header2 } from '../Header2/Header2';

import Banner from './BannerComplete.png';

export const Pokedex = () => {
  const { quitarFavorito, favorites } = useFavorites();

  if (favorites.length === 0)
    return (
      <div className="content-content-nopokemons">
        <Header2 />
        <div className="content-no-pokemons">
          <div className="no-favs-pokemons">
            <Texto text={`Todavia no hay Pokemons en favoritos, ve y agrega uno!`} textstyle="texto-pokedex" />
          </div>
          <div className="content-logos-nopokemons">
            <img src={Banner} className="banner" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="contenedor-favs-pokemon">
      <Header2 />
      <div className="text-container">
        <h1 className="text-pokedex">Tus pokemones favoritos:</h1>
      </div>

      <div className="content-cardpokedex">
        <div className="caja">
          {favorites.map((pokemones) => (
            <CardPokedex
              pokemon={pokemones}
              onClickQuitar={(pokemonId) => {
                const pokemonClicked = favorites.find((pok) => pok.id === pokemones.id);
                quitarFavorito(pokemonClicked);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/*
 onClickQuitar={(pokemonId) => {
              const pokemonClicked = favorites.find((pok) => pok.id === pokemones.id);
              quitarFavorito(pokemonClicked.id);
            } }
*/
