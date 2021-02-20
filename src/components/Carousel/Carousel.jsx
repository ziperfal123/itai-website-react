import React from 'react';
import { useTranslation } from 'react-i18next';
import SideNav from './SideNav';

const Carousel = () => {
  const { t } = useTranslation();
  console.log('t: ', t);

  return (
    <div className="carousel">
      <SideNav />
    </div>
  );
};

export default Carousel;
