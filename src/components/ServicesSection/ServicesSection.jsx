import React from 'react';
import { withTrans } from '../../i18n/withTrans';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';

const ServicesSection = ({ t }) => (
  <section className="services-section">
    <SectionTitle className="title" type="light">{t('services title')}</SectionTitle>
    <div className="services-container">
      <ServiceCard
        iconName="jesusIcon"
        title="Christianity history"
        text={t('christianity history text')}
      />
      <ServiceCard
        iconName="camelIcon"
        title="meet the desert"
        text={t('desert text')}
      />

      <ServiceCard
        iconName="templeIcon"
        title="old city of jerusalem"
        text={t('old city text')}
      />
      <ServiceCard
        iconName="jesusIcon"
        title="Christianity history"
        text={t('christianity history text')}
      />
      <ServiceCard
        iconName="camelIcon"
        title="meet the desert"
        text={t('desert text')}
      />

      <ServiceCard
        iconName="templeIcon"
        title="old city of jerusalem"
        text={t('old city text')}
      />
    </div>
  </section>
);

export default withTrans(ServicesSection);
