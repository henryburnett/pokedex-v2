import React, { FC } from "react";
import styled from "styled-components";
import { capitalize } from "../shared/methods";
import { Pokemon } from "../shared/models";

interface Props {
  pokemon: Pokemon;
  onClick: () => void;
}

export const PokemonListItem: FC<Props> = ({ pokemon, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <img src={pokemon.imageUrl} alt={pokemon.pokemon_species.name} />
      <br />
      {pokemon.entry_number + " - " + capitalize(pokemon.pokemon_species.name)}
    </ListItem>
  );
};

const ListItem = styled.div`
  width: 200px;
  height: 200px;
  margin: 1vw;
  background-color: red;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
  :hover {
    transform: scale(1.075);
  }
`;
