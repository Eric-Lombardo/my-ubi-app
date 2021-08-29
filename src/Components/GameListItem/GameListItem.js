import React from 'react';
import './GameListItem.css';

const GameListItem = ({ image, title, releaseText, platformIcons }) => {

  const displayPlatformIcons = platformIcons.map((item, index) => (
    <img key={index} className="platform-icon" alt="Platform icon" src={item} />
  ));

  return (
    <a className="game-item-container" href={`#${title}`}>
      <img className="poster" alt="Game poster" src={image} />
      <h3 className="item-title">{title}</h3>
      <p>{releaseText}</p>
      <div>
        {displayPlatformIcons}
      </div>
    </a>
  );
}

export default GameListItem;