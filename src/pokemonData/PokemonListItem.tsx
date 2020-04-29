import React, { FC } from "react";
import styled from "styled-components";
import { Pokemon } from "./pokemonData.redux";

interface Props {
  pokemon: Pokemon;
  onClick: () => void;
}

export const PokemonListItem: FC<Props> = ({ pokemon, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <img src={pokemon.imageUrl} alt={pokemon.pokemon_species.name} />
      {pokemon.entry_number + " - " + pokemon.pokemon_species.name}
    </ListItem>
  );
};

const ListItem = styled.div`
  border: 2px solid black;
  background: red;
`;
