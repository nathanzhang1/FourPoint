import React from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import Term from './Term';
import styles from '../../styles/degree/DegreePlan.module.css';

function DegreePlan() {
    const { id } = useParams();  // Get the dynamic id from the URL
    const location = useLocation();  // Access the passed state from the navigation
    const degreePlanName = location.state?.name || "Degree Plan";  // Use the passed name, or a fallback

    const terms = ["Fall 2023", "Winter 2024", "Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025", "Fall 2025", "Winter 2026", "Spring 2026", "Fall 2026", "Winter 2027", "Spring 2027"];

    return (
        <div className={styles.rootContainer}>
            <div className={styles.planHeaderContainer}>
                <h2 className={styles.planHeader}>{degreePlanName}</h2>
                <div className={styles.morePlans}>
                    <button>More plans</button>
                    <button>Create</button>
                </div>
            </div>
            <Link to="/">Back to dashboard</Link>
            <div className={styles.planContainer}>
                {terms.map(term => (
                    <Term key={Math.random()} term={term} degreePlan={id} />
                ))}
            </div>
        </div>
    );
}

export default DegreePlan;
