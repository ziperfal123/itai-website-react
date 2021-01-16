import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import TripAndSitesPage from '../pages/TripAndSitesPage';

export const routesPaths = {
  home: '/',
  about: '/about/',
  services: '/services/',
  tripsAndSites: '/tripsAndSites/',
};

export default [
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
