import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { CardPokemon } from '..';
import { getAllPokemons } from '../../services';
import { Search } from '../Search/Search';
import { Header } from '..';
import './home.css';
import { Loading } from '..';

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
const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    getAllPokemons().then((pokemos) => {
      setPokemon(pokemos.filter((pokemon) => !!pokemon.base?.Defense));
      setloading(false);
    });
  }, []);

  if (loading) return (
  <div>
    <Header/>
    <Search/>
    <Loading/>
  </div>)

  return (
    <div className="page-container">
      <Header />
      <Search />
      <div className='content-card'>
        <div className="cont-card-pokemon">
          {pokemones.map((pokemon) => (
            <CardPokemon pokemon={pokemon} />
          ))}
        </div>
      </div> 
      
      
    </div>
  );
};



