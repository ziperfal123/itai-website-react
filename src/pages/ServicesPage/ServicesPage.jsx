import React from 'react';
import './servicesPage.css';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import HeaderSpace from '../../components/HeaderSpace';
import itemsData from './itemsData';

const ServicesPage = () => {
  const { t } = useTranslation();

  const renderItem = ({ image, header, text }) => (
    <div className="item" key={header}>
      <div className="text">
        <h2 className="item-header">{t(header)}</h2>
        <p>{t(text)}</p>
      </div>
      {image()}
    </div>
  );

  return (
    <>
      <HeaderSpace />
      <div className="services page">
        {itemsData.map(renderItem)}
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
