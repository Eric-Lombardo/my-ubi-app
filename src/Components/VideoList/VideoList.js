import React from 'react';
import Button from 'react-bootstrap/Button';
import './VideoList.css';
import video1 from '../../Assets/featured-videos-sample-1.jpg';
import video2 from '../../Assets/featured-videos-sample-2.jpg';
import video3 from '../../Assets/featured-videos-sample-3.jpg';
import Swimlane from '../Swimlane/Swimlane';
import VideoListItem from '../VideoListItem/VideoListItem';

const VideoList = ({ title, buttonText }) => {

  return (
    <div className="video-container">
      <h2 className="title">{title}</h2>
      <div className="carousel-container-master video-container">
        <Swimlane
          displayDesktopNum={3}
          displayMobileNum={1}
          list={[
            <VideoListItem image={video1} title="video #1 title" borderColor="rgb(225, 241, 0)" />,
            <VideoListItem image={video2} title="video #2 title" borderColor="rgb(52, 207, 235)" />,
            <VideoListItem image={video3} title="video #3 title" borderColor="rgb(240, 174, 75)" />,
          ]}
        />
      </div>
      <a href="#allVideoTrailers" className="pill-btn-anchor-video">
        <Button className="rounded-pill view-videos-btn">{buttonText}</Button>
      </a>
    </div>
  );
}

export default VideoList;