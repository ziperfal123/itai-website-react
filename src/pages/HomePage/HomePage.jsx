import React from 'react';
import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import AboutSection from '../../components/AboutSection';
import ReviewsSection from '../../components/ReviewsSection';
import ContactSection from '../../components/ContactSection';
import CommonTripsSection from '../../components/CommonTripsSection';

const HomePage = () => (
  <div className="root">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <CommonTripsSection />
    <ReviewsSection />
    <ContactSection />
  </div>
);

export default HomePage;
