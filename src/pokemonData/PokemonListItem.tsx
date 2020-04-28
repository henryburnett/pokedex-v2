import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  value: string;
}

export const PokemonListItem: FC<Props> = ({ value }) => {
  return <ListItem>{value}</ListItem>;
};

const ListItem = styled.div`
  border: 2px dashed black,
  background: red
`;
