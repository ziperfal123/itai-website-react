import React from 'react';
import { withTrans } from '../../i18n/withTrans';
import SideNav from './components/SideNav';

const Carousel = ({ t }) => {
  console.log('Carousel');

  return (
    <div className="carousel">
      <SideNav />
    </div>
  );
};

export default withTrans(Carousel);
