import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { CardPokemon } from '.';
import { getAllPokemons } from '../../services';

export const Home = () => {
  //State de pokemonCard
  const [pokemones, setPokemon] = useState([
    {
      id: 0,
      name: {
        english: '',
      },
      base: {
        Attack: '',
        Defense: '',
      },
      type: [],
      hires: '',
    },
  ]);

  useEffect(() => {
    getAllPokemons().then((pokemos) => {
      setPokemon(pokemos.filter((pokemon) => !!pokemon.base?.Defense));
      console.log({ pokemos });
    });
  }, []);

  return (
   
      <div className="app-container1">
        {pokemones.map((pokemon) => (
          <CardPokemon pokemon={pokemon} />
        ))}
      </div>
  );
};
