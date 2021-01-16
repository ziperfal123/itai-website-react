import React, { Suspense } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Suspense fallback="loading.. :) ">
      <div className="root">
        <Nav />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {/* <CommonTripsSection /> */}
        <ReviewsSection />
        <ContactSection />
      </div>
    </Suspense>
  );
}

export default App;
