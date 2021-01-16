import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <h1>Root</h1>,
  },
  {
    path: '/services/',
    exact: true,
    component: () => <h1>Services</h1>,
  },
];

export default routes;
