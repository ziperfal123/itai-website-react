import React from 'react';
import { useTranslation } from 'react-i18next';
// import SideNav from './components/SideNav';

const Carousel = () => {
  const { t } = useTranslation();
  console.log('t: ', t);
  console.log('Carousel');

  return (
    <div className="carousel">
      {/* <SideNav /> */}
    </div>
  );
};

export default Carousel;
