import React, { useState, FC } from 'react';
import styled from 'styled-components';
import { capitalize } from '../shared/methods';
import { Pokemon } from '../shared/models';
import { TypeCell } from '../shared/Components/TypeCell';

interface Props {
  pokemon: Pokemon;
  displayTile: boolean;
  onClick: () => void;
}

export const PokemonItem: FC<Props> = ({ pokemon, displayTile, onClick }) => {
  const [isShown, setIsShown] = useState(false);

  return displayTile ? (
    <TileItem
      onClick={onClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={pokemon.image} alt={pokemon.name} />

      <span>{'#' + pokemon.number + ' - ' + capitalize(pokemon.name)}</span>
      {isShown && (
        <TypesDiv>
          {pokemon.types?.map((type) => (
            <TypeCell key={type} type={type} />
          ))}
        </TypesDiv>
      )}
    </TileItem>
  ) : (
    <RowItem onClick={onClick}>
      <Text>{pokemon.number}</Text>
      <Sprite src={pokemon.image} alt={pokemon.name} />
      <Text>{capitalize(pokemon.name)}</Text>
      <span>
        {pokemon.types?.map((type) => (
          <TypeCell key={type} type={type} />
        ))}
      </span>
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
  font-size: 1.25em;
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

const TypesDiv = styled.div``;
