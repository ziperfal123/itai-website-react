import React from 'react';
import Button from '../Button';
import SocialNetworkIcons from '../SocialNetworkIcons';
import ItaiPassport from '../../../assets/itai-passport.jpeg';
import { withTrans } from '../../i18n/withTrans';

const Hero = (props) => {
  // eslint-disable-next-line react/prop-types
  const { t } = props;
  console.log('Hero');
  return (
    <main className="hero">
      <div className="personal-details">
        <article>
          <div className="text">
            <h1 className="header">
              {`${t('hi')}!`}
              <span className="secondary-header">
                {' '}
                {t('i am itai')}
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

export default withTrans(Hero);
