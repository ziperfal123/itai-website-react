import React from 'react';
import { Input } from 'antd';
import Button from '../Button';

const contactForm = () => {
  console.log('contactForm');
  return (
    <div className="contact-form">
      <h2 className="header">leave me a message</h2>
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input.TextArea placeholder="message" rows={2} />
      <Button>send</Button>
    </div>
  );
};

export default contactForm;
