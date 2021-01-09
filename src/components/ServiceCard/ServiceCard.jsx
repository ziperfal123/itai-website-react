import React from 'react';
import { iconsFactory } from '../../helpers/serviceIconFactory';

const ServiceCard = ({ iconName, title, text }) => (
  <div className="service-card">
    {iconsFactory[iconName]}
    <h3 className="title">{title}</h3>
    <p className="text">{text}</p>
  </div>
);

export default ServiceCard;
