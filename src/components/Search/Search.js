import React from 'react';
import './search.css';
import { Select } from '../Select/Select';
import { Input } from '..';

export const Search = ({ propChange }) => {
  return (
    <div className="container-search">
      <div className='title-no-responsive'>
        <h1 style={{fontWeight: 400}}>800 <p style={{fontWeight: 800}}>Pokemons</p>for you to choose your favorite</h1>
      </div>
      
      <div className="search-text">
        <div className='text-c-h1'>
          <h1 style={{fontWeight: 100, padding:2}}>800</h1>
          <h1 style={{fontWeight: 700, fontSize: 25}}>Pokemons</h1>
          <h1 style={{fontWeight: 100}}>for you</h1>
        </div>
        <h1 style={{fontWeight: 100}}>to choose your </h1>
        <h1 style={{fontWeight: 100}}> favorite</h1>
      </div>
      <div className="input-search">
        <Input type="text" placeholder="  Encuentra tu Pokemon..." handleEvent={propChange} />
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
