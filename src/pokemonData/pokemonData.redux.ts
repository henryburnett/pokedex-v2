import { createSelector } from "reselect";

export interface Pokemon {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

// Selectors

export const selectPokemonResults = (state) => state.results.pokemon;
export const selectState = (state) => state;

// Actions

interface SetPokemonDataAction {
  type: string;
  payload: Pokemon[];
}

type PokemonActionTypes = SetPokemonDataAction;

export const setPokemonDataAction = (data: Pokemon[]): PokemonActionTypes => ({
  type: "pokemonData/setData",
  payload: data,
});

// Reducers

interface PokemonState {
  pokemon: {
    results: Pokemon[] | null;
  };
}

const initialState: PokemonState = {
  pokemon: {
    results: null,
  },
};

export function pokemonReducer(
  state = initialState,
  action: PokemonActionTypes
): PokemonState {
  switch (action.type) {
    case "pokemonData/setData": {
      return {
        ...state,
        pokemon: {
          results: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
