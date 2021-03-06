import React from 'react';

// eslint-disable-next-line react/prop-types
const SideNav = ({ items = [], selectedItemIndex, onItemClick }) => {
  console.log('SideNav');
  const renderItem = (textToDisplay, index) => (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li
      className={index === selectedItemIndex && 'selected'}
      key={textToDisplay}
      onClick={() => onItemClick(index)}
    >
      {textToDisplay}
    </li>
  );

  return (
    <ul className="side-nav">
      {items.map(renderItem)}
    </ul>
  );
};

export default SideNav;
