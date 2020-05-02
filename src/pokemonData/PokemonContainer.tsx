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
  selectShowDetails,
} from './pokemonData.redux';
import { GraphQLDetailsContainer } from './GraphQLDetailsContainer';

export const PokemonContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const allPokemon = useSelector(selectPokemonResults);
  const filteredPokemon = useSelector(selectFilteredResults);
  const displayTiles = useSelector(selectDisplayTiles);
  const showDetails = useSelector(selectShowDetails);

  const pokemonList =
    searchTerm === '' || searchTerm === null ? allPokemon : filteredPokemon;

  return (
    pokemonList && (
      <Container>
        {pokemonList &&
          pokemonList.map((pokemon: Pokemon) => (
            <PokemonItem
              pokemon={pokemon}
              key={pokemon.number}
              displayTile={displayTiles}
              onClick={() =>
                dispatch(
                  setShowDetailsAction({
                    showDetails: true,
                    detailsNumber: pokemon.number,
                  })
                )
              }
            />
          ))}

        {showDetails && <GraphQLDetailsContainer />}
      </Container>
    )
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
