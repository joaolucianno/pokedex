import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import { Pokemon } from "../../ts/types/app-types";
import { Container } from "./styles";

export default function InfoDisplay() {
  const pokemonContext  = useContext(PokemonContext);
  const pokemonSelected: Pokemon | null = pokemonContext && pokemonContext?.pokemonSelected;

  return (
    <Container>
      <h2>Pokemon Info</h2>
      <div className="status">
        <div>
          <b>Name:</b> <span style={{textTransform: 'capitalize'}}>{pokemonSelected?.name}</span>
        </div>
        <div>
          <b>Type: </b> 
          <span style={{textTransform: 'capitalize'}}>
            {pokemonSelected?.type.map((type, index) => {
              return pokemonSelected?.type.length - 1 === index ? `${type}` : `${type} | `
            })}
          </span>
        </div>
        <div>
          <b>Height:</b> {pokemonSelected?.height}m
        </div>
        <div>
          <b>Weight:</b> {pokemonSelected?.weight}kg
        </div>
        <br />
      </div>
    </Container>
  );
}