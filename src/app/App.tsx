import { Button } from '../components/Button/Button';
import { Display } from '../components/Display/Display';
import SearchIcon from '@mui/icons-material/Search';
import { InputText } from '../components/InputText/InputText';
import { SystemButton } from '../components/SystemButton/SystemButton';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Display title='Pokedex' />
      <Button icon={SearchIcon} onClick={() => console.log('Click')} />
      <InputText placeholder='Enter a Pokemon...' />
      <SystemButton color='red' />
      <SystemButton color='yellow' />
      <SystemButton color='green' />
    </div>
  );
}

export default App;
