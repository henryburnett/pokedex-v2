import React, { FC } from 'react';
import styled from 'styled-components';
import { capitalize } from '../shared/methods';
import { Pokemon } from '../shared/models';

interface Props {
  pokemon: Pokemon;
  displayTile: boolean;
  onClick: () => void;
}

export const PokemonItem: FC<Props> = ({ pokemon, displayTile, onClick }) => {
  return displayTile ? (
    <TileItem onClick={onClick}>
      <img src={pokemon.imageUrl} alt={pokemon.pokemon_species.name} />
      <br />
      <span>
        {pokemon.entry_number +
          ' - ' +
          capitalize(pokemon.pokemon_species.name)}
      </span>
    </TileItem>
  ) : (
    <RowItem onClick={onClick}>
      <Text>
        {pokemon.entry_number +
          ' - ' +
          capitalize(pokemon.pokemon_species.name)}
      </Text>
      <br />
      <Sprite src={pokemon.imageUrl} alt={pokemon.pokemon_species.name} />
    </RowItem>
  );
};

const TileItem = styled.div`
  width: 200px;
  height: 200px;
  margin: 1vw;
  background-color: red;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.075);
  }
`;

const RowItem = styled.div`
  height: 15vh;
  width: 100%;
  background-color: red;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Sprite = styled.img`
  align-self: center;
`;

const Text = styled.span``;
