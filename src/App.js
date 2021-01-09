import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Nav from "./components/Nav"
import HeroSection from './components/Hero'
import routes from './routes'

function App() {
  return (
      <div className={'root'}>
    <BrowserRouter>
      <Nav />
      <HeroSection />
      {/*<Switch>*/}
      {/*  {routes.map(route => (*/}
      {/*      <Link to={'/'}>Bus</Link>*/}
      {/*  ))}*/}
      {/*</Switch>*/}
    </BrowserRouter>
      </div>
  );
}

export default App;
