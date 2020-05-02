import React, { FormEvent } from 'react';
import { type } from 'os';
import { capitalize } from './methods';

export type InputEvent = FormEvent<{ name: string; value: string }>;

export const adaptPokeApiPokemon = (pokemon: PokeApiPokemon): Pokemon => ({
  number: pokemon.entry_number,
  name: pokemon.pokemon_species.name,
  image: pokemon.entry_number.toString() + '.png',
});

export const adaptPokemonToPokeApiNew = (pokemon: Pokemon): PokeApiPokemon => ({
  entry_number: pokemon.number,
  pokemon_species: {
    name: pokemon.name,
  },
});

export const adaptGraphQLPokemonToModel = (
  graphQLPokemon: GraphQLPokemon,
  index: number
): Pokemon => ({
  number: index + 1,
  name: capitalize(graphQLPokemon.node.idName),
  image: graphQLPokemon.node.sprites.frontDefault, //(index + 1).toString() + '.png',
  types: graphQLPokemon.node.types.map((type) => capitalize(type.type.idName)),
  abilities: graphQLPokemon.node.abilities.map((ability) =>
    capitalize(ability.ability.idName)
  ),
});

export interface Pokemon {
  number: number;
  name: string;
  types?: string[];
  image: string;
  abilities?: string[];
}

export interface GraphQLPokemon {
  node: {
    abilities: [
      {
        ability: {
          idName: string;
          __typeName: string;
        };
      }
    ];
    idName: string;
    order: number;
    types: [
      {
        type: {
          idName: string;
          __typeName: string;
        };
      }
    ];
    sprites: {
      frontDefault: string;
    };
    __typeName: string;
  };
}

export interface PokeApiPokemon {
  entry_number: number;
  pokemon_species: {
    name: string;
    url?: string;
  };
  image?: string;
}
