import './App.css';
import GameList from './Components/GameList/GameList';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';
import VideoList from './Components/VideoList/VideoList';

const App = () => {
  return (
    <>
      <Navigation />
      <GameList title="Explore more games" buttonText="view all games" />
      <News title="Latest news" categories={["All News", "Immortals Fenyx Rising", "Riders Republic", "Scott Pilgrim", "Prince of Persia"]} />
      <VideoList title="Featured Videos" buttonText="view all trailers" />
    </>
  );
}

export default App;
