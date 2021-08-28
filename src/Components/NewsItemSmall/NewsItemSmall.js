import React from 'react';
import './NewsItemSmall.css';

const NewsItemSmall = ({ title, image, date, isImagePositionRight }) => {

  return (
    <div className={`article-small-container ${isImagePositionRight ? 'image-right' : 'image-left'}`}>
      <img className="article-small-img" src={image} alt="article" />
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default NewsItemSmall;