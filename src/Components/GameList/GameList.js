import React from 'react';
import './GameList.css';
import Button from 'react-bootstrap/Button';
import GameListItem from '../GameListItem/GameListItem';
import sampleGame1 from '../../Assets/explore-more-games-sample-1.jpg';
import sampleGame2 from '../../Assets/explore-more-games-sample-2.jpg';
import sampleGame3 from '../../Assets/explore-more-games-sample-3.jpg';
import sampleGame4 from '../../Assets/explore-more-games-sample-4.jpg';
import sampleGame5 from '../../Assets/explore-more-games-sample-5.jpg';
import sampleGame6 from '../../Assets/explore-more-games-sample-6.jpg';
import ps4 from '../../Assets/ps4.svg';
import stadia from '../../Assets/stadia.svg';
import switchLogo from '../../Assets/switch.svg';
import windows from '../../Assets/windows.svg';
import xbox from '../../Assets/xbox.svg';
import Swimlane from '../Swimlane/Swimlane';

const GameList = ({ title, buttonText }) => {

  return (
    <div className="game-container">
      <h2 className="title">{title}</h2>
      <div className="carousel-container-master">
        <Swimlane
          displayDesktopNum={6}
          displayMobileNum={3}
          list={[
            <GameListItem key={1} image={sampleGame1} title="Watch Dogs: Legion" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={2} image={sampleGame2} title="Immortals Fenyx Rising" releaseText="Coming Soon" platformIcons={[ps4, switchLogo]} />,
            <GameListItem key={3} image={sampleGame3} title="Riders Republic" releaseText="2021" platformIcons={[xbox, ps4, windows]} />,
            <GameListItem key={4} image={sampleGame4} title="Scott Pilgrim" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia, switchLogo]} />,
            <GameListItem key={5} image={sampleGame5} title="Prince of Persia: Sands of Time" releaseText="2021" platformIcons={[xbox, ps4, windows]} />,
            <GameListItem key={6} image={sampleGame6} title="Agos: A Game of Space" releaseText="2021" platformIcons={[xbox, ps4, windows]} />,
            <GameListItem key={7} image={sampleGame1} title="Watch Dogs: Legion 1" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={8} image={sampleGame1} title="Watch Dogs: Legion 2" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={9} image={sampleGame1} title="Watch Dogs: Legion 3" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={10} image={sampleGame1} title="Watch Dogs: Legion 4" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={11} image={sampleGame1} title="Watch Dogs: Legion 5" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={12} image={sampleGame1} title="Watch Dogs: Legion 6" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={13} image={sampleGame1} title="Watch Dogs: Legion 7" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={14} image={sampleGame1} title="Watch Dogs: Legion 8" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
            <GameListItem key={15} image={sampleGame1} title="Watch Dogs: Legion 9" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />,
          ]}
        />
      </div>
      <a href="#allGames" className="pill-btn-anchor">
        <Button className="rounded-pill view-games-btn">{buttonText}</Button>
      </a>
    </div>
  );
}

export default GameList;