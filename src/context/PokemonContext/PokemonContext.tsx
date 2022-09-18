import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { PokemonTypes } from "../../ts/enums/app-enums";
import { Pokemon, PokeProvider } from "../../ts/types/app-types";

export const PokemonContext = createContext<PokeProvider | null>(null);

export const PokemonProvider = ({ children }: any) => {
  const [selector, setSelector] = useState(1);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);

  const handlePlusSelector = () => {
    setSelector((prevState) => prevState < 1154 ? ++prevState : prevState);
  }

  const handleMinusSelector = () => {
    setSelector((prevState) => prevState > 1 ? --prevState : prevState);
  }


  useLayoutEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${selector}/`);
      const pokemon = await data.json();
      return pokemon;
    };
    

    fetchPokemon().then((response) => {
      console.log('RESPONSE', response.name);
      setPokemonSelected({
        height: response.height,
        id: response.id,
        name: response.name,
        type: PokemonTypes.BUG,
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