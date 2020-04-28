import React, { useEffect, FC } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PokemonListItem } from "./PokemonListItem";
import {
  setPokemonDataAction,
  selectPokemonResults,
  selectState,
  Pokemon,
} from "./pokemonData.redux";

const fakeData = ["1", "2", "3"];

interface Props {
  pokemonData: Pokemon[] | null;
}

const PokemonListContainer: FC<Props> = ({ pokemonData }) => {
  const dispatch = useDispatch();
  console.log({ pokemonData });

  const fakeData = ["1", "2", "3"];

  console.log(selectState);

  return (
    <Container>
      {pokemonData === undefined
        ? null
        : pokemonData.map((item) => (
            <PokemonListItem value={item} key={item} />
          ))}
      <button onClick={() => dispatch({ type: "click" })}>Click</button>
      <div>{pokemonData}</div>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid black;
`;

const mapStateToProps = (state) => {
  return {
    pokemonData: selectPokemonResults(state),
  };
};

export default connect(mapStateToProps)(PokemonListContainer);
