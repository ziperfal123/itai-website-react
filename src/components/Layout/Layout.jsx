import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Nav from '../Nav';

const Layout = ({ children }) => {
  console.log('Layout');
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
