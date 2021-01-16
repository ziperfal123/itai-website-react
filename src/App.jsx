import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
// import AboutPage from './pages/AboutPage';
import routes from './routes';

function App() {
  return (
    <Suspense fallback="loading.. :) ">
      <Nav />
      <Switch>
        {routes.map((route) => (
          <Route
            {...route}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default App;
