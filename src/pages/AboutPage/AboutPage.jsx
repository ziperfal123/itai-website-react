import React from 'react';
import ItaiPassport from '../../assets/itai-passport.jpeg';
import Footer from '../../components/Footer';

const AboutPage = () => (
  <>
    <div className="header-space" />
    <div className="about page">
      <img
        className="passport-image"
        src={ItaiPassport}
        alt="Israel view"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
        dolore enim fugiat incidunt itaque laboriosam laborum maxime nam natus nesciunt
        officia possimus saepe, similique soluta unde voluptates. Laboriosam, quia!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
        dolore enim fugiat incidunt itaque laboriosam laborum maxime nam natus nesciunt
        officia possimus saepe, similique soluta unde voluptates. Laboriosam, quia!
      </p>
    </div>
    <Footer />
  </>
);

export default AboutPage;
