import { PokemonProvider } from '../../context/PokemonContext/PokemonContext';
import Layout from '../Layout/Layout';
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Layout />
    </PokemonProvider>
  );
}

export default App;
