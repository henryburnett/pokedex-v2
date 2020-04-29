import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectShowModal,
  selectDetailsNumber,
  setShowDetailsAction,
  setPokemonDetailsAction,
  selectPokemonDetails,
} from "./pokemonData.redux";

export const PokemonDetailsContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const isDetailsVisible = useSelector(selectShowModal);
  const detailsNumber = useSelector(selectDetailsNumber);
  const pokemonDetails = useSelector(selectPokemonDetails);

  useEffect(() => {
    if (detailsNumber) {
      const detailsUrl =
        "https://pokeapi.co/api/v2/pokemon-species/" + detailsNumber.toString();
      fetch(detailsUrl)
        .then((data) => data.json())
        .then((data) => {
          console.log({ data });
          dispatch(setPokemonDetailsAction(data));
        });
    }
  }, [detailsNumber, dispatch]);

  return (
    <PokemonDetails
      isVisible={isDetailsVisible}
      onClick={() => dispatch(setShowDetailsAction({ showDetails: false }))}
      pokemonDetails={pokemonDetails}
    >
      {detailsNumber}
      <br />
      {pokemonDetails?.name}
    </PokemonDetails>
  );
};

const PokemonDetails = styled.div`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  background-color: blue;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  width: 50vh;
  max-width: 100%;
`;
