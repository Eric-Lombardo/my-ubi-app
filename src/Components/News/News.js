import React, { useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import NewsItemSmall from '../NewsItemSmall/NewsItemSmall';
import './News.css'
import newsImage1 from '../../Assets/news-image-sample-1.jpg'
import newsImage2 from '../../Assets/news-image-sample-2.jpg'
import newsImage3 from '../../Assets/news-image-sample-3.jpg'
import newsImage4 from '../../Assets/news-image-sample-4.png'
import newsImage5 from '../../Assets/news-image-sample-5.jpg'
import Button from 'react-bootstrap/Button';

const News = ({ title, categories }) => {

  const [category, setCategory] = useState('all news')

  const mockArticleData = [
    {
      image: newsImage1,
      tag: 'Scott Pilgrim',
      title: 'Article tagged as Scott Pilgrim',
      date: 'October 9, 2020',
      id: 100
    },
    {
      image: newsImage2,
      tag: 'Riders Republic',
      title: 'Article tagged as Riders Republic',
      date: 'October 9, 2020',
      id: 101
    },
    {
      image: newsImage3,
      tag: 'Scott Pilgrim',
      title: 'Article tagged as Scott Pilgrim',
      date: 'October 8, 2020',
      id: 102
    },
    {
      image: newsImage4,
      tag: 'Prince of Persia',
      title: 'Article tagged as Prince of Persia',
      date: 'October 8, 2020',
      id: 103
    }
    ,
    {
      image: newsImage5,
      tag: 'Immortals fenyx rising',
      title: 'Article tagged as Immortals fenyx rising',
      date: 'October 8, 2020',
      id: 104
    }
  ]

  const displayCategories = categories.map(item => (
    <button
      key={item}
      className={`category-btn ${item.toLowerCase() === category.toLowerCase() && 'selected-category'}`}
      alt="category"
      onClick={() => setCategory(item)}>
      {item}
    </button>
  ));

  const displayMobileArticles = mockArticleData
    .filter(item => category.toLowerCase() === 'all news' || item.tag.toLowerCase() === category.toLowerCase())
    .map(item => (
      <NewsItem key={item.id} image={item.image} title={item.title} date={item.date} />
    ));

  const displayDesktopArticles = mockArticleData
    .filter(item => category.toLowerCase() === 'all news' || item.tag.toLowerCase() === category.toLowerCase())
    .map((item, index) => (index === 0) ?
      (<NewsItem key={item.id} image={item.image} title={item.title} date={item.date} />)
      :
      (<NewsItemSmall key={item.id} image={item.image} title={item.title} date={item.date} isImagePositionRight={index % 2 === 0 ? true : false} />)
    );

  return (
    <div className="news-master-container">
      <div className="news-container-mobile">
        <h2 className="news-title">{title}</h2>
        <div className="category-container">
          {displayCategories}
        </div>
        {displayMobileArticles}
      </div>

      <div className="news-container-desktop">
        <h2 className="news-title">{title}</h2>
        <div className="category-container">
          {displayCategories}
        </div>
        <div className="article-container-desktop">
          <div className="left-side">
            {displayDesktopArticles.slice(0, 2)}
          </div>
          <div className="right-side">
            {displayDesktopArticles.slice(2)}
          </div>
        </div>
      </div>

      <a href="#allNews" className="all-news-btn">
        <Button className="rounded-pill view-games-btn">all news</Button>
      </a>
    </div>
  );
}

export default News;