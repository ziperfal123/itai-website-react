import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <div className="root">
      <Nav />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* <CommonTripsSection /> */}
      <ReviewsSection />
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
