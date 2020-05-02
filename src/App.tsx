import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { adaptGraphQLPokemonToModel } from './shared/models';
import { PokemonContainer } from './pokemonData/PokemonContainer';
import { Header } from './Header';
import { setPokemonDataAction } from './pokemonData/pokemonData.redux';

const GET_ALL_POKEMON_INFO = gql`
  {
    pokemons(orderBy: [], first: 807) {
      totalCount
      edges {
        node {
          order
          idName
          abilities {
            ability {
              idName
            }
          }
          types {
            type {
              idName
            }
          }
          sprites {
            frontDefault
          }
        }
      }
    }
  }
`;

const GET_151_POKEMON_INFO = gql`
  {
    pokemons(orderBy: [], first: 151) {
      totalCount
      edges {
        node {
          order
          idName
          abilities {
            ability {
              idName
            }
          }
          types {
            type {
              idName
            }
          }
          sprites {
            frontDefault
          }
        }
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_151_POKEMON_INFO);
  const { data: dataAll, loading: loadingAll, error: errorAll } = useQuery(
    GET_ALL_POKEMON_INFO
  );

  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    const pokemonData = data.pokemons.edges
      .map((node, index) => {
        return adaptGraphQLPokemonToModel(node, index);
      })
      .sort((pokemon1, pokemon2) => {
        return pokemon1.number > pokemon2.number ? 1 : -1;
      });
    dispatch(setPokemonDataAction(pokemonData));
  }
  if (dataAll) {
    //dispatch({ type: 'ALL_POKEMON', payload: dataAll });
    const pokemonData = dataAll.pokemons.edges
      .map((node, index) => {
        return adaptGraphQLPokemonToModel(node, index);
      })
      .sort((pokemon1, pokemon2) => {
        return pokemon1.number > pokemon2.number ? 1 : -1;
      });
    dispatch(setPokemonDataAction(pokemonData));
  }
  return (
    <StyledApp>
      <Header />
      <PokemonContainer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  text-align: center;
`;
