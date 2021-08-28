import React from 'react';
import './GameList.css';
import Carousel from 'react-multi-carousel';
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
      slidesToSlide: 6 // optional, default to 1.
    }
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <GameListItem image={sampleGame1} title="Watch Dogs: Legion" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
        <GameListItem image={sampleGame2} title="Immortals Fenyx Rising" releaseText="Coming Soon" platformIcons={[ps4, switchLogo]} />
        <GameListItem image={sampleGame3} title="Riders Republic" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
        <GameListItem image={sampleGame4} title="Scott Pilgrim" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia, switchLogo]} />
        <GameListItem image={sampleGame5} title="Prince of Persia: Sands of Time" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
        <GameListItem image={sampleGame6} title="Agos: A Game of Space" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
        <GameListItem image={sampleGame1} title="Watch Dogs: Legion" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia]} />
        <GameListItem image={sampleGame2} title="Immortals Fenyx Rising" releaseText="Coming Soon" platformIcons={[ps4, switchLogo]} />
        <GameListItem image={sampleGame3} title="Riders Republic" releaseText="2021" platformIcons={[xbox, ps4, windows]} />
        <GameListItem image={sampleGame4} title="Scott Pilgrim" releaseText="2021" platformIcons={[xbox, ps4, windows, stadia, switchLogo]} />
      </Carousel>
    </>
  );
}

export default GameList;