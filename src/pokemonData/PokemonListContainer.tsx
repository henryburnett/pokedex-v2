import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PokemonListItem } from "./PokemonListItem";
import {
  selectPokemonResults,
  selectFilteredResults,
  Pokemon,
  setShowDetailsAction,
  selectSearchTerm,
} from "./pokemonData.redux";
import { PokemonDetailsContainer } from "./PokemonDetailsContainer";

export const PokemonListContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const allPokemon = useSelector(selectPokemonResults);
  const filteredPokemon = useSelector(selectFilteredResults);

  const pokemonList =
    searchTerm === "" || searchTerm === null ? allPokemon : filteredPokemon;

  return (
    <Container>
      {pokemonList &&
        pokemonList.map((pokemon: Pokemon) => (
          <PokemonListItem
            pokemon={pokemon}
            key={pokemon.entry_number}
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
`;
