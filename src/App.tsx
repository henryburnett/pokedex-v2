import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PokemonContainer } from './pokemonData/PokemonContainer';
import { Header } from './Header';
import { setPokemonDataAction } from './pokemonData/pokemonData.redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokedex/national/';
    fetch(pokemonUrl)
      .then((data) => data.json())
      .then((data) => {
        const pokemon = data.pokemon_entries;
        dispatch(setPokemonDataAction(pokemon));
      });
  }, [dispatch]);

  return (
    <StyledApp>
      <Header />
      <PokemonContainer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  text-align: center;
`;
