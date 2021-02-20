import React, { useState } from 'react';

const itemsText = ['nazeret', 'death sea', 'jerusalem', 'haifa', 'eilat'];

const SideNav = () => {
  console.log('SideNav');
  const [selectedItem, setSelectedItem] = useState((itemsText.length - 1) / 2);
  console.log('setSelectedItem: ', setSelectedItem);
  const renderItem = (textToDisplay, index) => (
    <li
      className={index === selectedItem && 'selected'}
      key={textToDisplay}

    >
      {textToDisplay}
    </li>
  );

  return (
    <ul className="side-nav">
      {itemsText.map(renderItem)}
    </ul>
  );
};

export default SideNav;
