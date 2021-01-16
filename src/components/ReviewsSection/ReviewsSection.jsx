import React from 'react';
import { useTranslation } from 'react-i18next';
import ManPassport from '../../assets/man-passport.jpg';
import WomanPassport from '../../assets/woman-passport.jpg';

const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      image: ManPassport,
      name: 'Alejandro Reyes',
      text: t('alejandro review text'),
    },
    {
      image: WomanPassport,
      name: 'Lisa Wix',
      text: t('lisa review text'),
    },
  ];

  const renderReview = (review) => (
    <div className="review" key={review.name}>
      <img
        src={review.image}
        alt="passport"
      />
      <div className="text">
        <p>{review.text}</p>
        <h3>
          {`- ${review.name}`}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="reviews-section">
      {reviews.map(renderReview)}
    </div>
  );
};

export default ReviewsSection;
