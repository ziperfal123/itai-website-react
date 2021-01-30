import React, { useState } from 'react';
import classnames from 'classnames';
import Itai1 from '../../assets/itai-people-1.jpg';
import Itai2 from '../../assets/itai-people-2.jpg';
import Itai3 from '../../assets/itai-people-3.jpg';

const IMAGES = {
  center: '3',
  left: '1',
  right: '2',
};

const PhotosCompostion = () => {
  // TODO:: Temporary solution using setState. make the performance here better.
  const [hoveredImage, setHoveredImage] = useState(IMAGES.center);

  const onMouseEnter = (imageNumber) => {
    setHoveredImage(imageNumber);
  };

  const onMouseLeave = () => {
    setHoveredImage(IMAGES.center);
  };

  return (
    <div className="photos-composition">
      <img
        className={classnames('photo photo-1', { hovered: hoveredImage === IMAGES.left })}
        onMouseEnter={() => onMouseEnter(IMAGES.left)}
        onMouseLeave={onMouseLeave}
        alt="itai and people traveling in Israel 1"
        src={Itai1}
      />
      <img
        className={classnames('photo photo-2', { hovered: hoveredImage === IMAGES.right })}
        onMouseEnter={() => onMouseEnter(IMAGES.right)}
        onMouseLeave={onMouseLeave}
        alt="itai and people traveling in Israel 2"
        src={Itai2}
      />
      <img
        className={classnames('photo photo-3', { hovered: hoveredImage === IMAGES.center })}
        onMouseEnter={() => onMouseEnter(IMAGES.center)}
        onMouseLeave={onMouseLeave}
        alt="itai and people traveling in Israel 1"
        src={Itai3}
      />
    </div>
  );
};

export default PhotosCompostion;
