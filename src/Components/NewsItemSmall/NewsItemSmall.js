import React from 'react';
import './NewsItemSmall.css';

const NewsItemSmall = ({ title, image, date, isImagePositionRight }) => {

  return (
    <a
      className={`article-small-container ${isImagePositionRight ? 'image-right' : 'image-left'}`}
      href={`#${title}`}
    >
      <img className="article-small-img" src={image} alt="article" />
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </a>
  );
}

export default NewsItemSmall;