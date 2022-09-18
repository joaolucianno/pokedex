import { MouseEventHandler } from "react";
import { PokemonTypes } from "../enums/app-enums";

export type Pokemon = {
  height: number;
  id: string;
  mainImage: string;
  name: string;
  type: PokemonTypes[];
  weight: number;
}

export type PokeProvider = {
  pokemonSelected: Pokemon;
  handlePlusSelector: MouseEventHandler;
  handleMinusSelector: MouseEventHandler;
}
