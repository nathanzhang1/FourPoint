import React from 'react';
import Term from './Term';
import styles from '../styles/DegreePlan.module.css';

function DegreePlan() {

  return (
    <div className={styles.rootContainer}>
      <h2 className={styles.planHeader}>Degree Plan A</h2>
      <div className={styles.planContainer}>
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
        <Term />
      </div>
    </div>
  );
}

export default DegreePlan;
