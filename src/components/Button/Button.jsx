import React from 'react';
import { Button as AntButton } from 'antd';
import classnames from 'classnames';

// eslint-disable-next-line react/prop-types
const Button = ({ children, styleType }) => {
  const classNames = classnames('button', styleType);

  return (
    <AntButton className={classNames}>
      {children}
    </AntButton>
  );
};

export default Button;
