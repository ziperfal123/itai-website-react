import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';
import Carousel from '../Carousel';

const CommonTripsSection = () => {
  const { t } = useTranslation();
  console.log('CommonTripsSection');

  return (
    <div className="common-trips-section">
      <SectionTitle type="light">{t('common trips title')}</SectionTitle>
      <Carousel />
    </div>
  );
};

export default CommonTripsSection;
