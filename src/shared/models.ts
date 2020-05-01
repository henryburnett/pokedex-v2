import React, { FormEvent } from "react";

export type InputEvent = FormEvent<{ name: string; value: string }>;

export interface Pokemon {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
  imageUrl: string;
}
