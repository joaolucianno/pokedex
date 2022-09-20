import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import { Pokemon } from "../../ts/types/app-types";
import { Container } from "./styles";

export default function InfoDisplay() {
  const pokemonContext  = useContext(PokemonContext);
  const pokemonSelected: Pokemon | null = pokemonContext && pokemonContext?.pokemonSelected;

  const formatId = (id: string | undefined) => {
    return id?.length === 1 ? `0${id}` : id;
  }

  return (
    <Container>
      <header>
        <h2 className="title-diff">{formatId(pokemonSelected?.id)} - {pokemonSelected?.name}</h2>
      </header>
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