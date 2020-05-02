import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { InputEvent } from '../shared/models';
import {
  selectSearchTerm,
  selectDisplayTiles,
  setSearchTermAction,
  setDisplayTilesAction,
} from '../pokemonData/pokemonData.redux';

export const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const displayTiles = useSelector(selectDisplayTiles);

  const handleSearchInput = useCallback(
    (event: InputEvent) => {
      dispatch(setSearchTermAction(event.currentTarget.value));
    },
    [dispatch]
  );

  const handleButtonClick = useCallback(() => {
    dispatch(setDisplayTilesAction(!displayTiles));
  }, [dispatch, displayTiles]);

  return (
    <StyledHeader>
      <p>Welcome to the Pokédex v2!</p>
      <SearchBar
        type={'text'}
        placeholder={'Type to search...'}
        value={searchTerm}
        onInput={handleSearchInput}
      />
      <br />
      <Button onClick={handleButtonClick}>
        {displayTiles ? 'Row View' : 'Tile View'}
      </Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  color: white;
`;

const SearchBar = styled.input`
  border-radius: 3px;
  margin: 5px;
`;

const Button = styled.button`
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: darkgrey;
  }
`;
