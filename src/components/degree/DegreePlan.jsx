import React from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import Term from './Term';
import styles from '../../styles/degree/DegreePlan.module.css';

function generateTerms(startTerm, startYear, endTerm, endYear, summer, system) {
    const terms = [];

    // Default term order: Winter, Spring, Summer, Fall
    const allTerms = system === "Quarter"
        ? ["Winter", "Spring", ...(summer === "Yes" ? ["Summer"] : []), "Fall"]
        : ["Spring", ...(summer === "Yes" ? ["Summer"] : []), "Fall"];  // Semester has no Winter

    let year = Number(startYear);
    let termIndex = allTerms.indexOf(startTerm);

    while (year <= Number(endYear)) {
        const currentTerm = allTerms[termIndex];
        terms.push(`${currentTerm} ${year}`);

        if (currentTerm === endTerm && year === Number(endYear)) {
            break;  // Stop once we reach the final term and year.
        }

        termIndex += 1;
        if (termIndex >= allTerms.length) {
            termIndex = 0;  // Loop back to the start of the term cycle
            year += 1;
        }
    }

    return terms;
}

function DegreePlan() {
    const { id } = useParams();  // Get the dynamic id from the URL
    const location = useLocation();  // Access the passed state from the navigation
    const degreePlanName = location.state?.name || "Degree Plan";  // Use the passed name, or a fallback

    // Extract term-related data from navigation state
    const { startTerm, startYear, endTerm, endYear, summer, system } = location.state;

    // Generate the terms dynamically based on start and end term/year
    const terms = generateTerms(startTerm, startYear, endTerm, endYear, summer, system);
    
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
