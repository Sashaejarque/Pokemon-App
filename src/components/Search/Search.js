import React from 'react';
import './search.css';
import { Select } from '../Select/Select';
import { Input } from '..';

export const Search = ({propChange}) => {
  return (
    <div className="container-search">
      <div className="search-text">
        <h1>800 Pokemons for you to choose your favorite</h1>
      </div>
      <div className="input-search">
        <Input type="text" placeholder="  Encuentra tu Pokemon..." handleEvent={propChange}/>
      </div>
      <div className="search-select">
        <Select
          data={[{ label: 'Fire' }, { label: 'Electric' }, { label: 'Normal' }, { label: 'Water' }]}
          placeholder="Tipo"
        />
        <Select
          data={[{ label: '+50' }, { label: '+100' }, { label: '+250' }, { label: '+500' }]}
          placeholder="Ataque"
        />
        <Select
          data={[{ label: '+50' }, { label: '+100' }, { label: '+250' }, { label: '+500' }]}
          placeholder="Defensa"
        />
      </div>
    </div>
  );
};


