import React from 'react';
import classnames from 'classnames';

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children, type = 'dark', className: propsClassName }) => {
  const classNames = classnames('section-title', type, propsClassName);
  return (
    <h1 className={classNames}>{children}</h1>
  );
};

export default SectionTitle;
