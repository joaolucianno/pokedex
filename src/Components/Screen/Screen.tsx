import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import { formatId } from "../../utils/Util";
import { Container } from "./styles";

const sound = new Audio('https://play.pokemonshowdown.com/audio/cries/pikachu.mp3');

export default function Screen() {
  const pokemonContext = useContext(PokemonContext);
  const pokemon = pokemonContext && pokemonContext.pokemonSelected;

  const handlePlayClick = () => {
    sound.play();
  }

  const handleStopClick = () => {
    sound.pause();
  }

  return (
    <Container>
      <div className="screen-header">
        <div className="small-btn"></div>
        <div className="small-btn"></div>
      </div>
      <div className="screen-picture">
        <span className="title">{`${formatId(pokemon?.id)}- ${pokemon?.name}`}</span>
        <img draggable="false" src={pokemon?.mainImage} alt="" />
      </div>
      <div className="screen-footer">
        <div className="sound-controls">
          <div className="big-btn" onClick={handlePlayClick}></div>
          <div className="big-btn" onClick={handleStopClick}></div>
        </div>
        <div className="speaker">
          <div className="sp"></div>
          <div className="sp"></div>
          <div className="sp"></div>
          <div className="sp"></div>
        </div>
      </div>
    </Container>
  );
}