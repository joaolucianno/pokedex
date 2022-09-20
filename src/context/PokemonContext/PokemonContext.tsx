import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { Pokemon, PokeProvider } from "../../ts/types/app-types";
import { Util } from "../../utils/Util";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokePlaceholder: Pokemon = Util.getPokemonPlacehoder();

export const PokemonContext = createContext<PokeProvider | null>(null);

export const PokemonProvider = ({ children }: any) => {
  const [selector, setSelector] = useState(1);
  const [pokemonWanted, setPokemonWanted] = useState('');
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
  const isSearchable = useRef(false);

  const handlePlusSelector = useCallback(() => {
    setSelector((prevState) => prevState < 151 ? ++prevState : prevState)
  }, []);

  const handleMinusSelector = useCallback(() => {
    setSelector((prevState) => prevState > 1 ? --prevState : prevState)
  }, []);

  const handleSearch = useCallback((pokemonName: string) => {
    isSearchable.current = true;
    setPokemonWanted(pokemonName.toLowerCase());
  }, []);

  const fetchPokemon = async (selector: number | string) => {
    const data = await fetch(`${API_URL}${selector}/`);
    const pokemon = await data.json();
    return pokemon;
  };

  useEffect(() => {
    fetchPokemon(isSearchable.current ? pokemonWanted : selector).then((response) => {
      setPokemonSelected({
        height: response.height,
        id: String(response.id),
        mainImage: response?.sprites?.other?.dream_world?.front_default,
        name: response.name,
        type: response?.types.map((type: any) => type.type.name),
        weight: response.weight
      })
      setSelector(response.id);
    }).catch((err) => {
      console.error('ERR', err);
      setSelector(0);
      setPokemonSelected(pokePlaceholder);
    }).finally(() => {
      setPokemonWanted(''); 
      isSearchable.current = false;
    });
  }, [selector, pokemonWanted]);

  if (pokemonSelected === null) {
    return <></>;
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonSelected,
        handlePlusSelector,
        handleMinusSelector,
        handleSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}