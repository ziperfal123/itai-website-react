import React from 'react';
import classnames from 'classnames';

const SectionTitle = ({ children, type = 'dark', className: propsClassName }) => {
  const classNames = classnames('section-title', type, propsClassName);
  return (
    <h1 className={classNames}>{children}</h1>
  );
};

export default SectionTitle;
