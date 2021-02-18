import React from 'react';
import { useTranslation } from 'react-i18next';

const SideNav = () => {
  const { t } = useTranslation();

  return (
    <div className="SideNav">
      <div className="vertical-line">
        {t('hello')}
      </div>
    </div>
  );
};

export default SideNav;
