import React from 'react';
import './VideoListItem.css'
import playIcon from '../../Assets/download.svg'

const VideoListItem = ({ image, title, borderColor }) => {

  return (
    <div className="video-item-container">
      <div
        className="thumbnail-container"
        style={{ border: `5px solid ${borderColor}` }}
      >
        <img className="thumbnail" src={image} alt="video thumbnail" />
        <img src={playIcon} alt="play" className="play-icon" />
      </div>
      <h3 className="video-title">{title}</h3>
    </div>
  );
}

export default VideoListItem;