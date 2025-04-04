import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, images }) => {
  if (!images || images.length === 0) {
    return null; // Do not render the button if there are no images
  }

  return (
    <button onClick={onLoadMore} className={styles.button}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
