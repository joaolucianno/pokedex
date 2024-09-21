import { Button } from '../components/Button/Button';
import { Display } from '../components/Display/Display';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Display title='Pokedex' />
      <Button icon={SearchIcon} onClick={() => console.log('Click')} />
    </div>
  );
}

export default App;
