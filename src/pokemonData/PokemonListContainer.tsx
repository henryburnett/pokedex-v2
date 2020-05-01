import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PokemonListItem } from "./PokemonListItem";
import {
  Pokemon,
  selectPokemonResults,
  selectFilteredResults,
  setShowDetailsAction,
  setPokemonDataAction,
  selectSearchTerm,
} from "./pokemonData.redux";
import { PokemonDetailsContainer } from "./PokemonDetailsContainer";

export const PokemonListContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const allPokemon = useSelector(selectPokemonResults);
  const filteredPokemon = useSelector(selectFilteredResults);

  useEffect(() => {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokedex/national/";
    fetch(pokemonUrl)
      .then((data) => data.json())
      .then((data) => {
        const pokemon = data.pokemon_entries;
        dispatch(setPokemonDataAction(pokemon));
      });
  }, [dispatch]);

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
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
