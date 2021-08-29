import React from 'react';
import './GameList.css';
import Carousel from 'react-multi-carousel';
import Button from 'react-bootstrap/Button';
import 'react-multi-carousel/lib/styles.css';
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
import arrow from '../../Assets/arrow.svg';

const GameList = ({ title }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 6,
      slidesToSlide: 6 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 992, min: 0 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    }
  };

  return (
    <div className="game-container">
      <h2 className="title">{title}</h2>
      <div className="carousel-container-master">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-padding-bottom"
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="carousel-item-padding-10-px"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame2} title="Immortals Fenyx Rising" releaseText="Coming Soon" platformIcons={[ps4, switchLogo]} />
          <GameListItem image={sampleGame3} title="Riders Republic" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
          <GameListItem image={sampleGame4} title="Scott Pilgrim" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia, switchLogo]} />
          <GameListItem image={sampleGame5} title="Prince of Persia: Sands of Time" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
          <GameListItem image={sampleGame6} title="Agos: A Game of Space" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 1" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 2" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 3" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 4" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 5" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 6" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 7" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 8" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
          <GameListItem image={sampleGame1} title="Watch Dogs: Legion 9" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
        </Carousel>
      </div>
      <a href="#allGames" className="pill-btn-anchor">
        <Button className="rounded-pill view-games-btn">View all games</Button>
      </a>
    </div>
  );
}

const CustomRight = ({ onClick }) => (
  <button className="arrow right" onClick={onClick}>
    <img alt="right arrow" src={arrow} />
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button className="arrow left" onClick={onClick}>
    <img alt="left arrow" src={arrow} />
  </button>
);
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group">
      <CustomLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <CustomRight onClick={() => next()} />
    </div>
  );
};

export default GameList;