import './App.css';
import GameList from './Components/GameList/GameList';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <GameList title="Explore more games" />
    </>
  );
}

export default App;
