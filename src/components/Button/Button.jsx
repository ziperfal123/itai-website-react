import React from 'react';
import { Button as AntButton } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ children, styleType }) => {
  const classNames = classnames('button', styleType);

  return (
    <AntButton className={classNames}>
      {children}
    </AntButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styleType: PropTypes.string,
};

Button.defaultProps = {
  styleType: 'primary',
};
