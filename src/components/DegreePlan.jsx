import React from 'react';
import { Link } from "react-router-dom";
import Term from './Term';
import styles from '../styles/DegreePlan.module.css';

function DegreePlan() {
    const degreePlan = "A";
    const terms = ["Fall 2023", "Winter 2024", "Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025", "Fall 2025", "Winter 2026", "Spring 2026", "Fall 2026", "Winter 2027", "Spring 2027"];

    return (
        <div className={styles.rootContainer}>
            <h2 className={styles.planHeader}>Degree Plan {degreePlan}</h2>
            <Link to="/">Back to dashboard</Link>
            <div className={styles.planContainer}>
                {terms.map(terms => (
                    <Term key={Math.random()} term={terms} degreePlan={degreePlan} />
                ))}
            </div>
        </div>
    );
}

export default DegreePlan;
