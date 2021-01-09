import React from 'react';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => (
  <section className="services-section">
    <SectionTitle className="title" type="light">services title</SectionTitle>
    <div className="services-container">
      <ServiceCard
        iconName="jesusIcon"
        title="Christianity history"
        text="christianity history text"
      />
      <ServiceCard
        iconName="camelIcon"
        title="meet the desert"
        text="desert text"
      />

      <ServiceCard
        iconName="templeIcon"
        title="old city of jerusalem"
        text="old city text"
      />
      <ServiceCard
        iconName="jesusIcon"
        title="Christianity history"
        text="christianity history text"
      />
      <ServiceCard
        iconName="camelIcon"
        title="meet the desert"
        text="desert text"
      />

      <ServiceCard
        iconName="templeIcon"
        title="old city of jerusalem"
        text="old city text"
      />
    </div>
  </section>
);

export default ServicesSection;
