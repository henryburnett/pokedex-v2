import React, { useEffect, useCallback, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { PokemonListContainer } from "./pokemonData/PokemonListContainer";
import {
  setPokemonDataAction,
  selectSearchTerm,
  setSearchTermAction,
} from "./pokemonData/pokemonData.redux";

export type InputEvent = FormEvent<{ name: string; value: string }>;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokedex/national/";
    fetch(pokemonUrl)
      .then((data) => data.json())
      .then((data) => {
        const pokemon = data.pokemon_entries;
        dispatch(setPokemonDataAction(pokemon));
      });
  }, [dispatch]);

  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchInput = useCallback(
    (event: InputEvent) => {
      dispatch(setSearchTermAction(event.currentTarget.value));
    },
    [dispatch]
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Pokédex v2!</p>
        <input
          type={"text"}
          placeholder={"Search"}
          value={searchTerm}
          onInput={handleSearchInput}
        />
        <PokemonListContainer />
      </header>
    </div>
  );
}

export default App;
