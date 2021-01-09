import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import { withTrans } from '../../i18n/withTrans';
import UsaFlag from '../../../assets/svg/flag-usa.inline.svg';
import SpainFlag from '../../../assets/svg/flag-spain.inline.svg';

const LANGUAGES = {
  english: 'en',
  spanish: 'es',
};

const Nav = ({ i18n, t }) => {
  const handleChangeLanguageClick = (clickedLanguage) => {
    i18n.changeLanguage(clickedLanguage);
  };

  return (
    <>
      <Menu right>
        <UsaFlag
          className="flag"
          onClick={() => handleChangeLanguageClick(LANGUAGES.english)}
        />
        <SpainFlag
          className="flag"
          onClick={() => handleChangeLanguageClick(LANGUAGES.spanish)}
        />
        <Link to="/" className="link">{t('home')}</Link>
        <Link to="/about/" className="link">{t('about')}</Link>
        <Link to="/services/" className="link">{t('services')}</Link>
        <Link to="/trips/" className="link">{t('trips and sites')}</Link>
      </Menu>
      <nav className="navigation">
        <ul>
          <Link to="/" className="link">{t('home')}</Link>
          <Link to="/about/" className="link">{t('about')}</Link>
          <Link to="/services/" className="link">{t('services')}</Link>
          <Link to="/trips/" className="link">{t('trips and sites')}</Link>
          <UsaFlag
            className="flag"
            onClick={() => handleChangeLanguageClick(LANGUAGES.english)}
          />
          <SpainFlag
            className="flag"
            onClick={() => handleChangeLanguageClick(LANGUAGES.spanish)}
          />
        </ul>
      </nav>
    </>
  );
};

export default withTrans(Nav);
