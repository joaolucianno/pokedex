import { Button } from '../components/Button/Button';
import { Display } from '../components/Display/Display';
import SearchIcon from '@mui/icons-material/Search';
import { InputText } from '../components/InputText/InputText';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Display title='Pokedex' />
      <Button icon={SearchIcon} onClick={() => console.log('Click')} />
      <InputText placeholder='Enter a Pokemon...' />
    </div>
  );
}

export default App;
