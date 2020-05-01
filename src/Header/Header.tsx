import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { InputEvent } from '../shared/models';
import {
  selectSearchTerm,
  setSearchTermAction,
} from '../pokemonData/pokemonData.redux';

export const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchInput = useCallback(
    (event: InputEvent) => {
      dispatch(setSearchTermAction(event.currentTarget.value));
    },
    [dispatch]
  );

  return (
    <StyledHeader>
      <p>Welcome to the Pokédex v2!</p>
      <input
        type={'text'}
        placeholder={'Type to search...'}
        value={searchTerm}
        onInput={handleSearchInput}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  color: white;
`;
