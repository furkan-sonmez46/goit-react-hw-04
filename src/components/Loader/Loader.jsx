import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval
        height={50}
        width={50}
        color="#0078d4"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#005a9e"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
