import React from 'react';
import Button from '../Button';
import SocialNetworkIcons from '../SocialNetworkIcons';
import ItaiPassport from '../../assets/itai-passport.jpeg';

const Hero = () => {
  console.log('Hero');
  return (
    <main className="hero">
      <div className="personal-details">
        <article>
          <div className="text">
            <h1 className="header">
              hi!
              <span className="secondary-header">
                i am Itai
                .
              </span>
            </h1>
            <h3 className="trinary-header">Freelance tour guide in Israel</h3>
          </div>
          <Button>contact me</Button>
          <SocialNetworkIcons />
        </article>
      </div>
      <img
        className="passport-image"
        src={ItaiPassport}
        alt="Israel view"
      />
      <div className="background-image" />
    </main>
  );
};

export default Hero;
