import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { PokemonListContainer } from "./pokemonData/PokemonListContainer";
import { setPokemonDataAction } from "./pokemonData/pokemonData.redux";

function App() {
  const dispatch = useDispatch();
  const pokemonUrl = "https://pokeapi.co/api/v2/pokedex/national/";

  useEffect(() => {
    fetch(pokemonUrl)
      .then((data) => data.json())
      .then((data) => {
        const pokemon = data.pokemon_entries;
        dispatch(setPokemonDataAction(pokemon));
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Pokédex v2!</p>
        <PokemonListContainer />
      </header>
    </div>
  );
}

export default App;
