import React from 'react';
import { withTrans } from '../../i18n/withTrans';
import SectionTitle from '../SectionTitle';
import PhotosComposition from '../PhotosComposition';

const AboutSection = ({ t }) => {
  console.log('AboutSection');

  return (
    <div className="about-section">
      <SectionTitle>{t('about title')}</SectionTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur cum,
        cupiditate inventore iusto maxime molestiae omnis qui, quia, quis quisquam quo quod rerum
        sint soluta suscipit tempore? Nihil, voluptates? Consectetur consequuntur cum quis quisquam
        quo quod rerum sint soluta suscipit tempore? Nihil, voluptates? Consectetur consequuntur
      </p>
      <PhotosComposition />
    </div>
  );
};

export default withTrans(AboutSection);
