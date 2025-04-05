import React from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); // Set the root element for accessibility

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={styles.content}>
        <img src={image} alt="Large view" />
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
