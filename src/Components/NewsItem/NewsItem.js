import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, image, date }) => {

  return (
    <a className="article-container" href={`#${title}`}>
      <img className="article-img" src={image} alt="article" />
      <p className="article-date">{date}</p>
      <h3>{title}</h3>
    </a>
  );
}

export default NewsItem;