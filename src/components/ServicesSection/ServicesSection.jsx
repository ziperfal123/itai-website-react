import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section">
      <SectionTitle className="title" type="light">services title</SectionTitle>
      <div className="services-container">
        <ServiceCard
          iconName="jesusIcon"
          title={t('Christianity history')}
          text={t('christianity history text')}
        />
        <ServiceCard
          iconName="camelIcon"
          title={t('meet the desert')}
          text={t('desert text')}
        />

        <ServiceCard
          iconName="templeIcon"
          title={t('old city of jerusalem')}
          text={t('old city text')}
        />
        <ServiceCard
          iconName="jesusIcon"
          title={t('Christianity history')}
          text={t('christianity history text')}
        />
        <ServiceCard
          iconName="camelIcon"
          title={t('meet the desert')}
          text={t('desert text')}
        />

        <ServiceCard
          iconName="templeIcon"
          title={t('old city of jerusalem')}
          text={t('old city text')}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
