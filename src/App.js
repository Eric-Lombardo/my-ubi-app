import './App.css';
import GameList from './Components/GameList/GameList';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';

const App = () => {
  return (
    <>
      <Navigation />
      <GameList title="Explore more games" />
      <News title="Latest news" categories={["All News", "Immortals Fenyx Rising", "Riders Republic", "Scott Pilgrim", "Prince of Persia"]} />
    </>
  );
}

export default App;
