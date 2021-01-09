import React from 'react';
import { withTrans } from '../../i18n/withTrans';
import SectionTitle from '../SectionTitle';
import Carousel from '../Carousel';

const CommonTripsSection = ({ t }) => {
  console.log('CommonTripsSection');

  return (
    <div className="common-trips-section">
      <SectionTitle type="light">{t('about title')}</SectionTitle>
      <Carousel />
    </div>
  );
};

export default withTrans(CommonTripsSection);
