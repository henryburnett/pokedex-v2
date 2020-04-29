import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PokemonListItem } from "./PokemonListItem";
import {
  selectPokemonResults,
  Pokemon,
  setShowDetailsAction,
} from "./pokemonData.redux";
import { PokemonDetailsContainer } from "./PokemonDetailsContainer";

export const PokemonListContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector(selectPokemonResults);

  return (
    <Container>
      {pokemonData &&
        pokemonData
          .filter((pokemon) => pokemon.entry_number <= 10)
          .map((pokemon: Pokemon) => (
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
