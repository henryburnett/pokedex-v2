import { combineReducers } from "redux";

import { pokemonReducer } from "../pokemonData/pokemonData.redux";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
