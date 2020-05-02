import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Pokemon } from '../shared/models';
import { TypeCell } from '../shared/Components/TypeCell';
import {
  selectShowDetails,
  selectDetailsNumber,
  selectIsFetching,
  setShowDetailsAction,
  selectPokemonResults,
} from './pokemonData.redux';

export const GraphQLDetailsContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const detailsNumber = useSelector(selectDetailsNumber);
  const pokemonList = useSelector(selectPokemonResults);
  const selectedPokemon: Pokemon = pokemonList
    ? pokemonList[detailsNumber - 1]
    : null;
  const isDetailsVisible = useSelector(selectShowDetails);
  const isFetching = useSelector(selectIsFetching);

  const moreInfoLink =
    'https://bulbapedia.bulbagarden.net/wiki/' + selectedPokemon?.name;

  return (
    <PokemonDetails isVisible={isDetailsVisible}>
      {!isFetching && (
        <div>
          <Image src={selectedPokemon.image} alt={selectedPokemon.image} />
          {selectedPokemon.number} - {selectedPokemon.name}
          <br />
          Types:
          {selectedPokemon.types?.map((type) => (
            <TypeCell key={type} type={type} />
          ))}
          <br />
          Abilities:
          {selectedPokemon.abilities?.map((ability, index) => {
            return (
              <span key={ability}>
                {' '}
                {ability}
                {index ? '' : ' - '}{' '}
              </span>
            );
          })}
          <br />
          <br />
          More Info:{' '}
          <span>
            <a href={moreInfoLink} target="_blank" rel="noopener noreferrer">
              {moreInfoLink}
            </a>
          </span>
        </div>
      )}

      <Button
        onClick={() => dispatch(setShowDetailsAction({ showDetails: false }))}
      >
        Close
      </Button>
    </PokemonDetails>
  );
};

const PokemonDetails = styled.div`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  border: 2px solid black;
  border-radius: 5px;
  background-color: lightblue;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 50vh;
  max-width: 100%;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
`;

const Button = styled.button`
  position: fixed;
  bottom: 5%;
  left: 50%;
`;
