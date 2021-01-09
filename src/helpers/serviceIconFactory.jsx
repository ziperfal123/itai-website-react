import React from 'react';
import { ReactComponent as JesusIcon } from '../assets/svg/icon-jesus.inline.svg';
import { ReactComponent as CamelIcon } from '../assets/svg/icon_camel.inline.svg';
import { ReactComponent as TempleIcon } from '../assets/svg/icon-temple.inline.svg';

const iconsFactory = {
  jesusIcon: <JesusIcon />,
  camelIcon: <CamelIcon className="camel" />,
  templeIcon: <TempleIcon />,
};

export default iconsFactory;
