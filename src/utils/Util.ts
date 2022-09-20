import { Pokemon } from "../ts/types/app-types"
import imagePlaceholder from '../assets/images/not-found.png';

export class Util {
  static getPokemonPlacehoder(): Pokemon {
    return {
      height: 0,
      id: '',
      mainImage: imagePlaceholder,
      name: 'Not Found',
      type: [],
      weight: 0,
    }
  }
}