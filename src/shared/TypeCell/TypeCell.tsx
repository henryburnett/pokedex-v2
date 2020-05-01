import React, { FC } from "react";
import styled from "styled-components";
import { TypeColors } from "./TypeColors";

interface Props {
  type: string;
}

export const TypeCell: FC<Props> = ({ type }) => {
  console.log({ type });
  const backgroundColor = TypeColors[type];

  return <StyledCell backgroundColor={backgroundColor}>{type}</StyledCell>;
};

const StyledCell = styled.span`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 2px;
  margin: 0.5vw;
  display: inline-block;
`;
