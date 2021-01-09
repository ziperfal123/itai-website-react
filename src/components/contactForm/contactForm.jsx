import React from 'react';
import { Input } from 'antd';
import Button from '../Button';
import { withTrans } from '../../i18n/withTrans';

const contactForm = ({ t }) => {
  console.log('contactForm');
  return (
    <div className="contact-form">
      <h2 className="header">leave me a message</h2>
      <Input placeholder={t('name')} />
      <Input placeholder={t('email')} />
      <Input.TextArea placeholder={t('message')} rows={2} />
      <Button>send</Button>
    </div>
  );
};

export default withTrans(contactForm);
