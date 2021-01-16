import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routesPaths } from '../../routes';
import { ReactComponent as USAIcon } from '../../assets/svg/flag-usa.inline.svg';
import { ReactComponent as SpainIcon } from '../../assets/svg/flag-spain.inline.svg';
import i18n from '../../i18n';

const LANGUAGES = {
  english: 'en',
  spanish: 'es',
};

const Nav = () => {
  const { t } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div className="nav">
      <Menu right>
        <USAIcon className="flag" onClick={() => changeLanguage(LANGUAGES.english)} />
        <SpainIcon className="flag" onClick={() => changeLanguage(LANGUAGES.spanish)} />
        <NavLink to={routesPaths.home} className="link">{t('home')}</NavLink>
        <NavLink to={routesPaths.about} className="link">{t('about')}</NavLink>
        <NavLink to={routesPaths.services} className="link">{t('services')}</NavLink>
        <NavLink to={routesPaths.tripsAndSites} className="link">{t('trips and sites')}</NavLink>
      </Menu>
      <nav className="navigation">
        <ul>
          <NavLink to={routesPaths.home} className="link">{t('home')}</NavLink>
          <NavLink to={routesPaths.about} className="link">{t('about')}</NavLink>
          <NavLink to={routesPaths.services} className="link">{t('services')}</NavLink>
          <NavLink to={routesPaths.tripsAndSites} className="link">{t('trips and sites')}</NavLink>
          <USAIcon className="flag" onClick={() => changeLanguage(LANGUAGES.english)} />
          <SpainIcon className="flag" onClick={() => changeLanguage(LANGUAGES.spanish)} />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
