import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Nav from "./components/Nav"
import HeroSection from './components/Hero'

function App() {
  return (
      <div className={'root'}>
      <Nav />
      <HeroSection />
      </div>
  );
}

export default App;
