import React from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import Term from './Term';
import styles from '../../styles/degree/DegreePlan.module.css';

function generateTerms(startTerm, startYear, endTerm, endYear) {
    const termsOrder = ["Winter", "Spring", "Summer", "Fall"];
    const terms = [];
    let currentTermIndex = termsOrder.indexOf(startTerm);
    let currentYear = Number(startYear);

    while (currentYear < endYear || (currentYear === endYear && termsOrder[currentTermIndex] !== endTerm)) {
        terms.push(`${termsOrder[currentTermIndex]} ${currentYear}`);
        currentTermIndex = (currentTermIndex + 1) % 4;
        if (currentTermIndex === 0) currentYear++;  // Increment year when cycling back to "Winter"
    }

    // Add the final term (inclusive end)
    terms.push(`${endTerm} ${endYear}`);
    
    return terms;
}

function DegreePlan() {
    const { id } = useParams();  // Get the dynamic id from the URL
    const location = useLocation();  // Access the passed state from the navigation
    const degreePlanName = location.state?.name || "Degree Plan";  // Use the passed name, or a fallback

    // Extract term-related data from navigation state
    const { startTerm, startYear, endTerm, endYear } = location.state;

    // Generate the terms dynamically based on start and end term/year
    const terms = generateTerms(startTerm, startYear, endTerm, endYear);
    
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
