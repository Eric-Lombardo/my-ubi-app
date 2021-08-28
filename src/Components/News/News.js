import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './News.css'
import newsImage1 from '../../Assets/news-image-sample-1.jpg'
import newsImage2 from '../../Assets/news-image-sample-2.jpg'
import newsImage3 from '../../Assets/news-image-sample-3.jpg'
import newsImage4 from '../../Assets/news-image-sample-4.png'
import newsImage5 from '../../Assets/news-image-sample-5.jpg'


const News = ({ title, categories }) => {

  const displayCategories = categories.map(item => (
    <button key={item} className="category-btn" alt="category">{item}</button>
  ));

  return (
    <div className="news-container">
      <h2 className="news-title">{title}</h2>
      <div className="category-container">
        {displayCategories}
      </div>
      <NewsItem image={newsImage1} title="Animating the future - Dev interview" date="October 9, 2020" />
      <NewsItem image={newsImage2} title="BIPOC of Ubisoft - Fatim Aissatou Diop" date="October 9, 2020" />
      <NewsItem image={newsImage3} title="For honor will be playable on Next-Gen Consoles" date="October 8, 2020" />
      <NewsItem image={newsImage4} title="Rabbids Coding crashes onto mobile" date="October 8, 2020" />
      <NewsItem image={newsImage5} title="Watch Dogs: Legion - New Story Details and Post-Launch plans revealed" date="October 6, 2020" />
      <NewsItem image={newsImage1} title="'The walking dead' fan favorites coming to Brawlhalla October 14" date="October 6, 2020" />
    </div>
  );
}

export default News;