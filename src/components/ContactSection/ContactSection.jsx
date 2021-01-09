import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaMapPin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { withTrans } from '../../i18n/withTrans';
import SocialNetworkHeader from '../SocialNetworkHeader';
import ContactForm from '../contactForm';

const ICON_SIZE = '50';
const MAIL_ICON_SIZE = '54';

const ContactSection = () => {
  const contactMeElements = [
    {
      icon: <FaMapPin size={ICON_SIZE} color="white" />,
      title: 'Address',
      details: 'Tel-Aviv, Israel',
    },
    {
      icon: <FiPhone size={ICON_SIZE} color="white" />,
      title: 'Phone',
      details: '+972-525-123456',
    },
    {
      icon: <AiOutlineMail size={MAIL_ICON_SIZE} color="white" />,
      title: 'Email',
      details: 'ziperfal123@gmail.com',
    },
  ];

  const renderContactMeDetails = (elem) => (
    <div className="detail" key={elem.title}>
      {elem.icon}
      <div className="text">
        <h2>{elem.title}</h2>
        <p>{elem.details}</p>
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

export default withTrans(ContactSection);
