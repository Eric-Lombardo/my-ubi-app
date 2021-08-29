import React from 'react';
import './VideoListItem.css'
import playIcon from '../../Assets/download.svg'

const VideoListItem = ({ image, title, borderColor, openModal, setVideoUrl, videoUrl }) => {

  const handleVideoClick = () => {
    openModal();
    setVideoUrl(videoUrl);
  }

  return (
    <button className="video-item-container" onClick={handleVideoClick}>
      <div
        className="thumbnail-container"
        style={{ border: `5px solid ${borderColor}` }}
      >
        <img className="thumbnail" src={image} alt="video thumbnail" />
        <img src={playIcon} alt="play" className="play-icon" />
      </div>
      <h3 className="video-title">{title}</h3>
    </button>
  );
}

export default VideoListItem;