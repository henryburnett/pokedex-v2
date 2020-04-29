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
export const selectFilteredResults = (state) => state.pokemon.filteredResults;
export const selectShowModal = (state) => state.pokemon.showDetails;
export const selectDetailsNumber = (state) => state.pokemon.detailsNumber;
export const selectPokemonDetails = (state) => state.pokemon.pokemonDetails;
export const selectSearchTerm = (state) => state.pokemon.searchTerm;
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

interface SetSearchTermAction {
  type: string;
  payload: string;
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

export const setSearchTermAction = (payload: string): PokemonActionTypes => ({
  type: "pokemonData/setSearchTerm",
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
  filteredResults: Pokemon[] | null;
  showDetails: boolean;
  detailsNumber: number | null;
  pokemonDetails: Object | null;
  searchTerm: string;
}

const initialState: PokemonState = {
  results: null,
  filteredResults: null,
  showDetails: false,
  detailsNumber: null,
  pokemonDetails: null,
  searchTerm: "",
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
        filteredResults: action.payload.map((result) => {
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

    case "pokemonData/setSearchTerm": {
      return {
        ...state,
        searchTerm: action.payload,
        filteredResults: state.results
          ? state.results.filter((result) =>
              result.pokemon_species.name.includes(action.payload)
            )
          : null,
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
