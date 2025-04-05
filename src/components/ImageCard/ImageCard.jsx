import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image.small} alt={image.alt} className={styles.image} />
    </div>
  );
};

export default ImageCard;
