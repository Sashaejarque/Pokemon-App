import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { CardPokemon } from '..';
import { getAllPokemons } from '../../services';
import { Search } from '../Search/Search';
import { Header } from '..';
import './home.css';
import { Loading } from '..';
import { Modal } from '../Modal/Modal';
import { Navigate, useNavigate } from 'react-router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Hover3d } from '../Hover3d/Hover3d';

export const Home = () => {
  let redirect = useNavigate();
  let redirectPantallaInicial = () => {
    redirect('/');
  };

 const [favsPokemons, setFavsPokemons] = useLocalStorage('favoritos');
 
 const agregarPokemonFav = () => {
  console.log('hola')
 }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [pokemonSelected, setPokemonSelected] = useState(null);

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

  const [valor, setValor] = useLocalStorage('infoInput');
  const [valorSelect, setValorSelect] = useLocalStorage('infoSelect');

  useEffect(() => {
    if (!valor && !valorSelect) {
      redirectPantallaInicial();
    }
    setloading(true);
    getAllPokemons().then((pokemos) => {
      setPokemon(pokemos.filter((pokemon) => !!pokemon.base?.Defense));
      setloading(false);
    });
  }, []);

  if (loading)
    return (
      <div>
        <Header />
        <Search />
        <Loading />
      </div>
    );

  return (
    <div className="page-container">
      <Header />
      <Search />
      <Modal
        open={pokemonSelected !== null}
        closeModal={() => {
          setPokemonSelected(null);
        }}
      >
        <CardPokemon pokemon={pokemonSelected} />
      </Modal>

      <div className="content-card">
        <div className="cont-card-pokemon">
          {pokemones.map((pokemon) => (
            <Hover3d
              width="352"
              height="136"
              onClickVerMas={(pokemonId) => {
                const pokemonClicked = pokemones.find((pok) => pok.id === pokemon.id);
                setPokemonSelected(pokemonClicked);
              }}
              onClickFav={(pokemonId) => {
                const pokemonFaved = pokemones.find((pok)=> pok.id === pokemon.id);
                setFavsPokemons(pokemonFaved);
                console.log('hola')
              }}
            >
              <CardPokemon pokemon={pokemon} />
            </Hover3d>
          ))}
        </div>
      </div>
    </div>
  );
};
