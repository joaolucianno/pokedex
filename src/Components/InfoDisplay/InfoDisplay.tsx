import { useContext, FC } from "react";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import { Pokemon } from "../../ts/types/app-types";
import { formatId } from "../../utils/Util";
import { Container } from "./styles";

type InfoDisplayProps = {
  className?: string
};

export const InfoDisplay: FC<InfoDisplayProps> = ({ className }) => {
  const pokemonContext  = useContext(PokemonContext);
  const pokemonSelected: Pokemon | null = pokemonContext && pokemonContext?.pokemonSelected;

  return (
    <Container className={className}>
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
            { pokemonSelected?.type?.join(' | ') || '--' }
          </span>
        </div>
        <div>
          <b>Height:</b> {pokemonSelected?.height ? pokemonSelected?.height + 'm' : '--'}
        </div>
        <div>
          <b>Weight:</b> {pokemonSelected?.weight ? pokemonSelected?.height + 'kg' : '--'}
        </div>
        <br />
      </div>
    </Container>
  );
}