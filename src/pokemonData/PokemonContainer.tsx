import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Pokemon } from '../shared/models';
import { PokemonItem } from './PokemonItem';
import {
  selectPokemonResults,
  selectFilteredResults,
  selectDisplayTiles,
  setShowDetailsAction,
  selectSearchTerm,
} from './pokemonData.redux';
import { PokemonDetailsContainer } from './PokemonDetailsContainer';

export const PokemonContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const allPokemon = useSelector(selectPokemonResults);
  const filteredPokemon = useSelector(selectFilteredResults);
  const displayTiles = useSelector(selectDisplayTiles);

  const pokemonList =
    searchTerm === '' || searchTerm === null ? allPokemon : filteredPokemon;

  return (
    <Container>
      {pokemonList &&
        pokemonList.map((pokemon: Pokemon) => (
          <PokemonItem
            pokemon={pokemon}
            key={pokemon.entry_number}
            displayTile={displayTiles}
            onClick={() =>
              dispatch(
                setShowDetailsAction({
                  showDetails: true,
                  detailsNumber: pokemon.entry_number,
                })
              )
            }
          />
        ))}
      <PokemonDetailsContainer />
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid black;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
