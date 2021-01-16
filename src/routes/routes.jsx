import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import TripAndSitesPage from '../pages/TripAndSitesPage';
import routesPaths from './paths';

const routes = [
  {
    path: routesPaths.home,
    exact: true,
    component: HomePage,
  },
  {
    path: routesPaths.about,
    exact: true,
    component: AboutPage,
  },
  {
    path: routesPaths.services,
    exact: true,
    component: ServicesPage,
  },
  {
    path: routesPaths.tripsAndSites,
    exact: true,
    component: TripAndSitesPage,
  },
];

const AppSwitch = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        {...route}
      />
    ))}
  </Switch>
);

export default AppSwitch;
