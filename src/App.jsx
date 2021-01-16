import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
// import HomePage from './pages/HomePage';
// import routes from './routes';

function App() {
  return (
    <Suspense fallback="loading.. :) ">
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <h1>HomePAge</h1>} />
        <Route path="/services" component={() => <h1>Services</h1>} />
        {/* {routes.map((route) => ( */}
        {/*  <Route */}
        {/*    {...route} */}
        {/*  /> */}
        {/* ))} */}
      </Switch>
    </Suspense>
  );
}

export default App;
