import { Pokemon } from "../ts/types/app-types"
import imagePlaceholder from '../assets/images/not-found.png';

export const getPokemonPlacehoder = (): Pokemon => {
  return {
    height: 0,
    id: '',
    mainImage: imagePlaceholder,
    name: 'Not Found',
    type: [],
    weight: 0,
  }
}

export const formatId = (id: string | undefined): string => {
  return id?.length === 1 ? `0${id}` : id;
}