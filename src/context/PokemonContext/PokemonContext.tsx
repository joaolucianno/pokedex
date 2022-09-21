import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { PokemonAssembler } from "../../assemblers/pokemon/pokemon-assembler";
import { Pokemon, PokeProvider } from "../../ts/types/app-types";
import { Util } from "../../utils/Util";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokePlaceholder: Pokemon = Util.getPokemonPlacehoder();
const pokemonMap = new Map<String, Pokemon>();

export const PokemonContext = createContext<PokeProvider | null>(null);

export const PokemonProvider = ({ children }: any) => {
  const [selector, setSelector] = useState<number>(1);
  const [pokemonWanted, setPokemonWanted] = useState<string>('');
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
  const isSearchByName = useRef<boolean>(false);
  const isSearchByNumber = useRef<boolean>(false);
  const isMounted = useRef<boolean>(true);

  const handlePlusSelector = useCallback(() => {
    isSearchByNumber.current = true;
    setSelector((prevState) => prevState < 151 ? ++prevState : prevState)
  }, []);

  const handleMinusSelector = useCallback(() => {
    isSearchByNumber.current = true;
    setSelector((prevState) => prevState > 1 ? --prevState : prevState)
  }, []);

  const handleSearch = useCallback((pokemonName: string) => {
    if (!pokemonName) {
      return;
    }
    isSearchByName.current = true;
    setPokemonWanted(pokemonName.toLowerCase());
  }, []);

  const fetchPokemon = async (selector: number | string): Promise<any> => {
    const data = await fetch(`${API_URL}${selector}/`);
    const pokemon = await data.json();
    return pokemon;
  };

  const getPokemonFromMap = (id: string): Pokemon | undefined => {
    return pokemonMap.get(id);
  }

  const setPokemonNotFound = (): void => {
    setSelector(0);
    setPokemonSelected(pokePlaceholder);
  }

  const setPokemon = (pokemonResponse: any): void => {
    const pokemon = PokemonAssembler.from(pokemonResponse);
    pokemonMap.set(pokemon.id, pokemon);
    setPokemonSelected(pokemon);
  }

  useEffect(() => {
    const pokemonFromMap = getPokemonFromMap(selector.toString());
    if (pokemonFromMap) {
      setPokemonSelected(pokemonFromMap);
      isSearchByNumber.current = false;
    } else if ((isSearchByNumber.current || isMounted.current)) {
      fetchPokemon(selector).then((response) => {
        setPokemon(response);
      }).catch((error) => {
        console.error(error);
        setPokemonNotFound();
      }).finally(() => {
        isMounted.current = false;
        isSearchByNumber.current = false;
      });
    }
  }, [selector]);

  useEffect(() => {
    if (isSearchByName.current) {
      fetchPokemon(pokemonWanted).then((response) => {
        setPokemon(response);
        setSelector(response.id);
      }).catch((error) => {
        console.error(error);
        setPokemonNotFound();
      }).finally(() => {
        isSearchByName.current = false;
        setPokemonWanted('');
      });
    }
  }, [pokemonWanted]);

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