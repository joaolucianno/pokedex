import { FC, useContext, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { Container } from "./styles";
import { PokemonContext } from "../../context/PokemonContext/PokemonContext";
import Button from "../Button/Button";

type SearchProps = {
  className?: string
}

export const Search: FC<SearchProps> = ({ className }) => {
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
    const valueSearched: HTMLInputElement = document.querySelector('[name="pokemon-name"]');

    if (!valueSearched?.value) {
      valueSearched?.classList?.add('input-error');
      return;
    }

    pokemonContext?.handleSearch(valueSearched?.value);
    valueSearched.value = '';
  }

  const removeError = (inputElement: HTMLInputElement) => {
    if (inputElement?.value?.length > 0) {
      inputElement?.classList.remove('input-error');
    }
    
  }

  useEffect(() => {
    const valueSearched: HTMLInputElement = document.querySelector('[name="pokemon-name"]');
    valueSearched?.addEventListener('keyup', handleKeyEnter);
    
    return () => {valueSearched?.removeEventListener('keyup', handleKeyEnter)};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className={className}>
      <input 
        type="text" 
        placeholder="Enter a Pokemon..." 
        className="pokemon-name" 
        name="pokemon-name"
        onChange={(event) => {removeError(event?.target)}}
      />
      <Button className="search-btn" onClick={handleClickSearch}>
        <SearchIcon style={{color: '#fff'}}/>
      </Button>
    </Container>
  );
}