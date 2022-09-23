import { useContext, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { Container } from "./styles";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import Button from "../Button/Button";


export default function Search() {
  const pokemonContext = useContext(PokemonContext);

  const handleKeyEnter = (event: any) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const handleClickSearch = () => {
    onSearch();
  }

  const onSearch =  () => {
    const valueSearched: any = document.querySelector('[name="pokemon-name"]');
    if (!valueSearched?.value) {
      return;
    }

    pokemonContext?.handleSearch(valueSearched?.value);
    valueSearched.value = '';
  }

  useEffect(() => {
    const valueSearched: any = document.querySelector('[name="pokemon-name"]');
    valueSearched?.addEventListener('keyup', (event: any) => handleKeyEnter(event));
    
    return () => valueSearched?.removeEventListener('keyup', handleKeyEnter);
  }, [])

  return (
    <Container>
      <input 
        type="text" 
        placeholder="Enter a Pokemon..." 
        className="pokemon-name" 
        name="pokemon-name"
      />
      <Button className="search-btn" onClick={handleClickSearch}>
        <SearchIcon style={{color: '#fff'}}/>
      </Button>
    </Container>
  );
}