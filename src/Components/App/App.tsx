import { PokemonProvider } from '../../context/PokemonContext/PokemonContext';
import ArrowControl from '../ArrowControl/ArrowControl';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import Screen from '../Screen/Screen';
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Screen></Screen>
      <InfoDisplay />
      <ArrowControl />
    </PokemonProvider>
  );
}

export default App;
