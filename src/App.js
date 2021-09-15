import React, { useState, useEffect, Fragment } from "react";
import "@fontsource/karla";
import { CardPokemon } from "./components";
import { Header } from "./components";

function App() {
  //State de pokemonCard
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: {
      english: "",
    },
    base: {
      Attack: "",
      Defense: "",
    },
    type: [],
    hires: "",
  });

  //peticion a la api
  const consultarApi = async () => {
    const api = await fetch("https://app.pokemon-api.xyz/pokemon/random");
    const poke = await api.json();
    setPokemon(poke);
    console.log(pokemon);
  };

  useEffect(() => {
    consultarApi();
    console.log({ pokemon });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="app-container">
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
        <CardPokemon pokemon={pokemon} />
      </div>
    </Fragment>
  );
}

export default App;
