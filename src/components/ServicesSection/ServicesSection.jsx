import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section">
      <SectionTitle className="title" type="light">{t('services title')}</SectionTitle>
      <div className="services-container">
        <ServiceCard
          iconName="jesusIcon"
          title={t('christianity history title')}
          text={t('christianity history text')}
        />
        <ServiceCard
          iconName="camelIcon"
          title={t('meet the desert title')}
          text={t('meet the desert text')}
        />
        <ServiceCard
          iconName="templeIcon"
          title={t('old city of jerusalem title')}
          text={t('old city of jerusalem text')}
        />
        <ServiceCard
          iconName="jesusIcon"
          title={t('christianity history title')}
          text={t('christianity history text')}
        />
        <ServiceCard
          iconName="camelIcon"
          title={t('meet the desert title')}
          text={t('meet the desert text')}
        />
        <ServiceCard
          iconName="templeIcon"
          title={t('old city of jerusalem title')}
          text={t('old city of jerusalem text')}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
