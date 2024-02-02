import React from 'react';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="main-page__section-3-card">
      <img
        className='main-page__section-3-img'
        src={imageUrl}
        alt="Картинка"
      />
      <p className='main-page__section-3-title'>{title}</p>
      <p className='main-page__section-3-text'>{description}</p>
    </div>
  );
};

export default Card;
