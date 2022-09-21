import { useContext, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { Container } from "./styles";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";


export default function Search() {
  const pokemonContext = useContext(PokemonContext);
  // const [valueSearched, setValueSearched] = useState<string>('');

  const onSearch = () => {
    const valueSearched: any = document.querySelector('[name="pokemon-name"]');
    
    if (!valueSearched?.value) {
      return;
    }

    pokemonContext?.handleSearch(valueSearched?.value);
    valueSearched.value = '';
  }

  // const onSearch = () => {
  //   if (!valueSearched) {
  //     return;
  //   }

  //   pokemonContext?.handleSearch(valueSearched);
  //   setValueSearched('');
  // }

  return (
    <Container>
      <input 
        type="text" 
        placeholder="Enter a Pokemon..." 
        className="pokemon-name" 
        name="pokemon-name"
        // value={valueSearched}
        // onChange={(el) => {
        //   setValueSearched(el?.target?.value)
        // }}
      />
      <button className="search-btn" onClick={onSearch}>
        <SearchIcon style={{color: '#fff'}}/>
      </button>
    </Container>
  );
}