import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, image, date }) => {

  return (
    <div className="article-container">
      <img className="article-img" src={image} alt="article" />
      <p className="article-date">{date}</p>
      <h3>{title}</h3>
    </div>
  );
}

export default NewsItem;