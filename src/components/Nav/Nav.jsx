import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// const LANGUAGES = {
//   english: 'en',
//   spanish: 'es',
// };

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className="navigation">
      {/* <Menu right> */}
      {/*  <Link to="/" className="link">{'home'}</Link> */}
      {/*  <Link to="/about/" className="link">{'about'}</Link> */}
      {/*  <Link to="/services/" className="link">{'services'}</Link> */}
      {/*  <Link to="/trips/" className="link">{'trips and sites'}</Link> */}
      {/* </Menu> */}
      <nav className="navigation">
        <ul>
          <NavLink to="/" className="link">{t('home')}</NavLink>
          <NavLink to="/about/" className="link">{t('about')}</NavLink>
          <NavLink to="/services/" className="link">{t('services')}</NavLink>
          <NavLink to="/trips/" className="link">{t('trips and sites')}</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
