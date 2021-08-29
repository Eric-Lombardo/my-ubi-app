import React from 'react';
import './Swimlane.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow from '../../Assets/arrow.svg';

const Swimlane = ({ list }) => {

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

export default Swimlane;