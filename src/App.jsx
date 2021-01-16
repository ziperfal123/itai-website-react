import React, { Suspense } from 'react';
import Nav from './components/Nav';
import AppSwitch from './routes';

function App(props) {
  console.log('props: ', props);
  return (
    <Suspense fallback="loading.. :) ">
      <Nav />
      <AppSwitch />
    </Suspense>
  );
}

export default App;
