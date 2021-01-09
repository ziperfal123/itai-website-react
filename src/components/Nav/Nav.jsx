import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link, Switch} from 'react-router-dom'
const LANGUAGES = {
  english: 'en',
  spanish: 'es',
};

const Nav = () => {
  return (
    <Switch>
      <div className={'navigation'}>
      {/*<Menu right>*/}
      {/*  <Link to="/" className="link">{'home'}</Link>*/}
      {/*  <Link to="/about/" className="link">{'about'}</Link>*/}
      {/*  <Link to="/services/" className="link">{'services'}</Link>*/}
      {/*  <Link to="/trips/" className="link">{'trips and sites'}</Link>*/}
      {/*</Menu>*/}
      <nav className="navigation">
        <ul>
          <Link to="/" className="link">{'home'}</Link>
          <Link to="/about/" className="link">{'about'}</Link>
          <Link to="/services/" className="link">{'services'}</Link>
          <Link to="/trips/" className="link">{'trips and sites'}</Link>
        </ul>
      </nav>
      </div>
    </Switch>
  );
};

export default Nav;