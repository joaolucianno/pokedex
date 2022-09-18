import { PokemonTypes } from "../enums/app-enums";

export type Pokemon = {
  height: number;
  id: string;
  name: string;
  type: PokemonTypes;
  weight: number;
}

export type PokeProvider = {
  pokemonSelected: Pokemon;
  handlePlusSelector: Function;
  handleMinusSelector: Function;
}
