import React, { FC } from 'react';
import styled from 'styled-components';
import { TypeColors } from './TypeColors';

interface Props {
  type: string;
}

export const TypeCell: FC<Props> = ({ type }) => {
  const backgroundColor = TypeColors[type.toUpperCase()];

  return (
    <StyledCell backgroundColor={backgroundColor}>
      {type.toUpperCase()}
    </StyledCell>
  );
};

const StyledCell = styled.span`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 3px;
  margin: 0.5vw;
  display: inline-block;
  font-size: 0.75em;
`;
