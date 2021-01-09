import React from 'react';
import { withTrans } from '../../../../i18n/withTrans';

const SideNav = ({ t }) => {
  console.log('SideNav');

  return (
    <div className="SideNav">
      <div className="vertical-line" />
    </div>
  );
};

export default withTrans(SideNav);
