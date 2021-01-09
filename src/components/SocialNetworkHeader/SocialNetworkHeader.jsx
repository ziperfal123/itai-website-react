import React from 'react';
import TwitterIcon from '../../assets/svg/twitter.inline.svg';
import FacebookIcon from '../../assets/svg/facebook.inline.svg';
import LinkedinIcon from '../../assets/svg/linkedin.inline.svg';

const SocialNetworkHeader = ({ horizontallyCentered }) => (
  <div className="social-network-header">
    <a target="_blank"><TwitterIcon /></a>
    <a target="_blank"><FacebookIcon /></a>
    <a target="_blank"><LinkedinIcon /></a>
  </div>
);

export default SocialNetworkHeader;
