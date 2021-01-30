import React from 'react';
import './servicesPage.css';
import Jerusalem from '../../assets/jerusalem.jpg';
import Footer from '../../components/Footer';

const data = [
  {
    image: () => (
      <img
        alt="one of itai's services "
        src={Jerusalem}
      />
    ),
    header: 'Old city of jerusalem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
  {
    image: () => (
      <img
        alt="one of itai's services "
        src={Jerusalem}
      />
    ),
    header: 'Christianity History',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
  {
    image: () => (
      <img
        alt="one of itai's services "
        src={Jerusalem}
      />
    ),
    header: 'Old city of jerusalem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
  {
    image: () => (
      <img
        alt="one of itai's services "
        src={Jerusalem}
      />
    ),
    header: 'Christianity History',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
];

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
    <div className="header-space" />
    <div className="services page">
      {data.map(renderItem)}
    </div>
    <Footer />
  </>
);

export default ServicesPage;
