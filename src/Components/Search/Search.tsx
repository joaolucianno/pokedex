import { useContext, useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { Container } from "./styles";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";


export default function Search() {
  const pokemonContext = useContext(PokemonContext);
  const searched = useRef<string>('');

  return (
    <Container>
      <input type="text" placeholder="Enter a Pokemon..." className="pokemon-name" onChange={({target: {value}}) => {searched.current = value}} />
      <button className="search-btn" onClick={() => {
        pokemonContext?.handleSearch(searched.current);
      }}>
        <SearchIcon style={{color: '#fff'}}/>
      </button>
    </Container>
  );
}