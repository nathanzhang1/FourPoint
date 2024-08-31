import React from 'react';
import Term from './Term';
import styles from '../styles/DegreePlan.module.css';

function DegreePlan() {
    const terms = ["Fall 2023", "Winter 2024", "Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025", "Fall 2025", "Winter 2026", "Spring 2026", "Fall 2026", "Winter 2027", "Spring 2027"];

  return (
    <div className={styles.rootContainer}>
      <h2 className={styles.planHeader}>Degree Plan A</h2>
      <div className={styles.planContainer}>
        {terms.map(terms => (
            <Term key={Math.random()} term={terms} />
        ))}
      </div>
    </div>
  );
}

export default DegreePlan;
