import React from 'react';
import './GameListItem.css';

const GameListItem = ({ image, title, releaseText, platformIcons }) => {

  const displayPlatformIcons = platformIcons.map((item, index) => (
    <img key={index} className="platform-icon" alt="Platform icon" src={item} />
  ));

  return (
    <div className="game-item-container">
      <img className="poster" alt="Game poster" src={image} />
      <h3 className="item-title">{title}</h3>
      <p>{releaseText}</p>
      <div>
        {displayPlatformIcons}
      </div>
    </div>
  );
}

export default GameListItem;