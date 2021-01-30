import React from 'react';
import './servicesPage.css';
import Footer from '../../components/Footer';
import HeaderSpace from '../../components/HeaderSpace';
import itemsData from './itemsData';

const renderItem = ({ image, header, text }) => (
  <div className="item" key={header}>
    <div className="text">
      <h2 className="item-header">{header}</h2>
      <p>{text}</p>
    </div>
    {image()}
  </div>
);

const ServicesPage = () => (
  <>
    <HeaderSpace />
    <div className="services page">
      {itemsData.map(renderItem)}
    </div>
    <Footer />
  </>
);

export default ServicesPage;
