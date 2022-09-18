import { PokemonProvider } from '../../context/PokemonContext/PokemonContext';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import Screen from '../Screen/Screen';
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Screen></Screen>
      <InfoDisplay />
    </PokemonProvider>
  );
}

export default App;
