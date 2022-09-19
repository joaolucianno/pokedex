import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import { Container } from "./styles";

export default function ArrowControl() {
  const pokemonContext  = useContext(PokemonContext);
  
  return (
    <Container>
      <div className="btn">
        <div></div>
      </div>
      <div className="btn" onClick={pokemonContext?.handlePlusSelector}>
        <div></div>
      </div>
      <div className="btn">
        <div></div>
      </div>
      <div className="btn" onClick={pokemonContext?.handleMinusSelector}>
        <div></div>
      </div>
      <div className="btn">
        <div></div>
      </div>
    </Container>
  );
}