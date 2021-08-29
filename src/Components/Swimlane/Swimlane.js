import React from 'react';
import './Swimlane.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow from '../../Assets/arrow.svg';

const Swimlane = ({ list, displayDesktopNum, displayMobileNum, hideArrowsOnDesktop }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: displayDesktopNum,
      slidesToSlide: displayDesktopNum // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 992, min: 0 },
      items: displayMobileNum,
      slidesToSlide: displayMobileNum // optional, default to 1.
    }
  };

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
      <div className={hideArrowsOnDesktop ? 'hide-arrows-desktop carousel-button-group' : 'carousel-button-group'}>
        <CustomLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <CustomRight onClick={() => next()} />
      </div>
    );
  };


  return (
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
        {list}
      </Carousel>
    </div>
  );
}

export default Swimlane;