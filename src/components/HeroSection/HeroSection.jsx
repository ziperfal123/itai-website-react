import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import SocialNetworkIcons from '../SocialNetworkIcons';
import ItaiPassport from '../../assets/itai-passport.jpeg';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <main className="hero">
      <div className="personal-details">
        <article>
          <div className="text">
            <h1 className="header">
              {t('hi')}
              &nbsp;
              <span className="secondary-header">
                {`${t('i am itai')}.`}
              </span>
            </h1>
            <h3 className="trinary-header">{t('freelance tour guide in israel')}</h3>
          </div>
          <Button>{t('contact me')}</Button>
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

export default HeroSection;
