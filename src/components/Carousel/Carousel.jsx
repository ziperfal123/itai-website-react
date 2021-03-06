import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SideNav from './SideNav';

const items = ['nazeret', 'death sea', 'jerusalem', 'haifa', 'eilat'];

const Carousel = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState((items.length - 1) / 2);
  console.log('t: ', t);

  const onItemClick = (clickedIndex) => {
    setSelectedIndex(clickedIndex);
  };
  return (
    <div className="carousel">
      <SideNav
        items={items}
        selectedItemIndex={selectedIndex}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default Carousel;
