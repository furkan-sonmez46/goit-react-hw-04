import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image.webformatURL} alt={image.tags} className={styles.image} />
    </div>
  );
};

export default ImageCard;
