import { PokemonProvider } from '../../context/PokemonContext/PokemonContext';
import ArrowControl from '../ArrowControl/ArrowControl';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import Screen from '../Screen/Screen';
import Search from '../Search/Search';
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Screen></Screen>
      <InfoDisplay />
      <ArrowControl />
      <Search />
    </PokemonProvider>
  );
}

export default App;
