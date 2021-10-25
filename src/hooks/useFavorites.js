import React from 'react';
import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const crearFavorito = (favorito) => {
    if (favorites.find((fav) => fav.id === favorito.id)) {
      return alert('Este pokemon ya se encuentra en favoritos');
    } else {
      setFavorites([...favorites, favorito]);
    }

    setFavorites([...favorites, favorito]);
  };

  const quitarFavorito = (pokemonId) => {
    const eliminarFavorito = favorites.filter(fav => fav.id !== pokemonId.id);
    setFavorites(eliminarFavorito);
  };

  return { favorites, crearFavorito, quitarFavorito };
}

/* 
if (favorites.filter((fav) => fav.id === favorito.id)) {
      alert('Este pokemon ya se encuentra en favoritos');
    } else {
      setFavorites([...favorites, favorito]);
    }

     setFavorites([...favorites, favorito]);
*/
