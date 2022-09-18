import { PokemonTypes } from "../../ts/enums/app-enums";
import { Pokemon } from "../../ts/types/app-types";
import { Container } from "./styles";

const pokemon: Pokemon = {
  height: 15,
  id: 'string-id',
  name: 'Pikachu',
  type: PokemonTypes.ELECTRIC,
  weight: 20,
}

export default function InfoDisplay() {
  return (
    <Container>
      <div className="status">
        <div>
          <span className="property">Name:</span> {pokemon.name}
        </div>
        <div>
          <span className="property">Type:</span> {pokemon.type}
        </div>
        <div>
          <span className="property">Height:</span> {pokemon.height}m
        </div>
        <div>
          <span className="property">Weight:</span> {pokemon.weight}kg
        </div>
      </div>
      <div className="description">
          <b>The duck Pokemon</b> <br />
          Uses mysterious powers to perform various attacks
        </div>
    </Container>
  );
}