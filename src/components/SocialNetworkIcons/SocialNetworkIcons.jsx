import React from 'react';
import classnames from 'classnames';
import dataArr from './links';

const SocialNetworkIcons = () => {
  const renderListItem = (itemObj) => (
    <li key={itemObj.id}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a className={classnames('social-link', itemObj.name)} href={itemObj.url} target="_blank">
        {itemObj.icon}
      </a>
    </li>
  );

  return (
    <ul className="social-network-icons">
      {dataArr.map(renderListItem)}
    </ul>
  );
};

export default SocialNetworkIcons;
