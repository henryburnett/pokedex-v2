export interface Pokemon {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
  imageUrl: string;
}

// Selectors

export const selectPokemonResults = (state) => state.pokemon.results;
export const selectShowModal = (state) => state.pokemon.showDetails;
export const selectDetailsNumber = (state) => state.pokemon.detailsNumber;
export const selectPokemonDetails = (state) => state.pokemon.pokemonDetails;
export const selectState = (state) => state;

// Actions

interface SetPokemonDataAction {
  type: string;
  payload: Pokemon[];
}

interface SetShowDetailsAction {
  type: string;
  payload: {
    showDetails: boolean;
    detailsNumber?: number;
  };
}

interface SetPokemonDetailsAction {
  type: string;
  payload: Object;
}

type PokemonActionTypes =
  | SetPokemonDataAction
  | SetShowDetailsAction
  | SetPokemonDetailsAction;

export const setPokemonDataAction = (
  payload: Pokemon[]
): PokemonActionTypes => ({
  type: "pokemonData/setData",
  payload,
});

export const setPokemonDetailsAction = (
  payload: Object
): PokemonActionTypes => ({
  type: "pokemonData/setDetails",
  payload,
});

export const setShowDetailsAction = (payload: {
  showDetails: boolean;
  detailsNumber?: number;
}): PokemonActionTypes => ({
  type: "pokemonData/setShowDetails",
  payload,
});

// Reducers

interface PokemonState {
  results: Pokemon[] | null;
  showDetails: boolean;
  detailsNumber: number | null;
  pokemonDetails: Object | null;
}

const initialState: PokemonState = {
  results: null,
  showDetails: false,
  detailsNumber: null,
  pokemonDetails: null,
};

export function pokemonReducer(state = initialState, action): PokemonState {
  switch (action.type) {
    case "pokemonData/setData": {
      return {
        ...state,
        results: action.payload.map((result) => {
          return {
            ...result,
            imageUrl: "sprites/" + result.entry_number + ".png",
          };
        }),
      };
    }

    case "pokemonData/setDetails": {
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    }

    case "pokemonData/setShowDetails": {
      const showDetails = action.payload.showDetails;
      return {
        ...state,
        showDetails: showDetails,
        detailsNumber: showDetails ? action.payload.detailsNumber : null,
      };
    }

    default:
      return state;
  }
}
