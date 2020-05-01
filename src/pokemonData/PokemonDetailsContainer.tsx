import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { capitalize } from "../shared/methods";
import {
  selectShowModal,
  selectDetailsNumber,
  selectIsFetching,
  selectPokemonDetails,
  setShowDetailsAction,
  setPokemonDetailsAction,
  setIsFetchingAction,
} from "./pokemonData.redux";

export const PokemonDetailsContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const isDetailsVisible = useSelector(selectShowModal);
  const detailsNumber = useSelector(selectDetailsNumber);
  const pokemonDetails = useSelector(selectPokemonDetails);
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    if (detailsNumber) {
      const detailsUrl =
        "https://pokeapi.co/api/v2/pokemon/" + detailsNumber.toString();
      dispatch(setIsFetchingAction(true));
      fetch(detailsUrl)
        .then((data) => data.json())
        .then((data) => {
          dispatch(setPokemonDetailsAction(data));
          dispatch(setIsFetchingAction(false));
        });
    }
  }, [detailsNumber, dispatch]);

  const imageUrl = "sprites/" + detailsNumber + ".png";
  const name = pokemonDetails ? capitalize(pokemonDetails?.name) : null;
  const types = pokemonDetails?.types;
  const abilities = pokemonDetails?.abilities;
  const moreInfoLink = "https://bulbapedia.bulbagarden.net/wiki/" + name;

  return (
    <PokemonDetails
      isVisible={isDetailsVisible}
      pokemonDetails={pokemonDetails}
    >
      {!isFetching && (
        <div>
          <Image src={imageUrl} alt={name} />
          {detailsNumber} - {name}
          <br />
          Types:
          {types?.map((type) => (
            <span> {type.type.name} </span>
          ))}
          <br />
          Abilities:
          {abilities?.map((ability) => (
            <span> {ability.ability.name} </span>
          ))}
          <br />
          More Info:{" "}
          <span>
            <a href={moreInfoLink} target="_blank">
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
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
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
