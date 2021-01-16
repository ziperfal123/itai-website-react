import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaMapPin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import SocialNetworkHeader from '../SocialNetworkHeader';
import ContactForm from '../contactForm';

const ICON_SIZE = '50';
const MAIL_ICON_SIZE = '54';

const ContactSection = () => {
  const { t } = useTranslation();
  const contactMeElements = [
    {
      icon: <FaMapPin size={ICON_SIZE} color="white" />,
      title: t('address'),
      details: 'Tel-Aviv, Israel',
    },
    {
      icon: <FiPhone size={ICON_SIZE} color="white" />,
      title: t('phone'),
      details: '+972-525-123456',
    },
    {
      icon: <AiOutlineMail size={MAIL_ICON_SIZE} color="white" />,
      title: t('email'),
      details: 'ziperfal123@gmail.com',
    },
  ];

  const renderContactMeDetails = ({ title, icon, details }) => (
    <div className="detail" key={title}>
      {icon}
      <div className="text">
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );

  return (
    <div className="contact-section">
      <SocialNetworkHeader />
      <div className="details">
        {contactMeElements.map(renderContactMeDetails)}
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
