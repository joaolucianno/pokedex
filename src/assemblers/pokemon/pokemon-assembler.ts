import { Pokemon } from "../../ts/types/app-types";

export class PokemonAssembler {
  static from(pokemonResponse: any): Pokemon {
    return {
      height: pokemonResponse.height,
      id: String(pokemonResponse.id),
      mainImage: pokemonResponse?.sprites?.other?.dream_world?.front_default,
      name: pokemonResponse.name,
      type: pokemonResponse?.types.map((type: any) => type.type.name),
      weight: pokemonResponse.weight
    }
  } 
}