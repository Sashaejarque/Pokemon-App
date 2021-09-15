import React, { useState, useEffect, Fragment } from "react";
import "@fontsource/karla";
import { CardPokemon } from "./components";
import { Header } from "./components";
import { getAllPokemons } from "./services";

function App() {
  //State de pokemonCard
  const [pokemones, setPokemon] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    getAllPokemons().then((pokemos) => {
      setPokemon(pokemos.filter((pokemon) => !!pokemon.base?.Defense));
      console.log({ pokemos });
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="app-container">
        {pokemones.map((pokemon) => (
          <CardPokemon pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
