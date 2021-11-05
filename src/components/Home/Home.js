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
import { useFavorites } from '../../hooks/useFavorites';


export const Home = () => {
  let redirect = useNavigate();
  let redirectPantallaInicial = () => {
    redirect('https://sashaejarque.github.io/Pokemon-App');
  };

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = e => {  
    setSearchTerm(e.target.value);
  };

  const { favorites, crearFavorito } = useFavorites();

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
      <Search
      propChange={handleSearch}
      />
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
          {pokemones.filter((pokemon) => {
            if(searchTerm === '') {
              return pokemon
            } else if(pokemon.name.english.toLowerCase().includes(searchTerm.toLowerCase())) {
              return pokemon
            }
          }).map((pokemon) => (
            <Hover3d
              width="352"
              height="136"
              onClickVerMas={(pokemonId) => {
                const pokemonClicked = pokemones.find((pok) => pok.id === pokemon.id);
                setPokemonSelected(pokemonClicked);
              }}
              onClickFav={(pokemonId) => {
                crearFavorito(pokemon);
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
