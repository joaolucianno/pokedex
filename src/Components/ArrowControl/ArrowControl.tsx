import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import Button from "../Button/Button";
import { Container } from "./styles";

export default function ArrowControl() {
  const pokemonContext  = useContext(PokemonContext);
  
  return (
    <Container>
      <Button className="btn">
        <div></div>
      </Button>
      <Button className="btn" onClick={pokemonContext?.handlePlusSelector}>
        <div></div>
      </Button>
      <Button className="btn">
        <div></div>
      </Button>
      <Button className="btn" onClick={pokemonContext?.handleMinusSelector}>
        <div></div>
      </Button>
      <Button className="btn">
        <div></div>
      </Button>
    </Container>
  );
}