import { Games } from './components/cards/gameCard';
import { Pesquisa } from './components/header/header';
import { GamesProvider } from './contexts/contextGames';

function App() {
  return (
    <GamesProvider>
      <Pesquisa/>
      <Games/>
    </GamesProvider>
  );
}

export default App;
