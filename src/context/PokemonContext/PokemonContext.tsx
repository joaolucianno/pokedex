import { createContext, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Pokemon, PokeProvider } from "../../ts/types/app-types";

export const PokemonContext = createContext<PokeProvider | null>(null);

export const PokemonProvider = ({ children }: any) => {
  const [selector, setSelector] = useState(1);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);

  const handlePlusSelector = useCallback(() => {
    setSelector((prevState) => prevState < 905 ? ++prevState : prevState)
  }, []);

  const handleMinusSelector = useCallback(() => {
    setSelector((prevState) => prevState > 1 ? --prevState : prevState)
  }, []);

  useLayoutEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${selector}/`);
      const pokemon = await data.json();
      return pokemon;
    };
    

    fetchPokemon().then((response) => {
      setPokemonSelected({
        height: response.height,
        id: response.id,
        mainImage: response?.sprites?.other?.dream_world?.front_default,
        name: response.name,
        type: response?.types.map((type: any) => type.type.name),
        weight: response.weight
      })
    }).catch(console.error)
  }, [selector]);

  if (pokemonSelected === null) {
    return <></>;
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonSelected,
        handlePlusSelector,
        handleMinusSelector,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}