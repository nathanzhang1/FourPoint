import React, { useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Term from './Term';
import UpdatePlan from './UpdatePlan';
import { UserContentContext } from '../../context/UserContentContext';
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
    const { plans, updatePlan, deletePlan } = useContext(UserContentContext);
    const navigate = useNavigate();

    const plan = plans.find((plan) => plan.id === id);
    if (!plan) {
        return <div>Plan not found!</div>;
    }

    const terms = generateTerms(plan.startTerm, plan.startYear, plan.endTerm, plan.endYear, plan.summer, plan.system);

    const handleDeletePlan = () => {
        deletePlan(id);
        navigate('/');
    };

    const handleUpdatePlan = (updatedPlan) => {
        updatePlan(updatedPlan);
    };
    
    return (
        <div className={styles.rootContainer}>
            <div className={styles.planHeaderContainer}>
                <h2 className={styles.planHeader}>{plan.name || "Degree Plan"}</h2>
                <UpdatePlan plan={plan} handleUpdatePlan={handleUpdatePlan} handleDeletePlan={handleDeletePlan}/>
            </div>
            <div className={styles.planContainer}>
                {terms.map(term => (
                    <Term key={Math.random()} term={term} degreePlan={id} />
                ))}
            </div>
        </div>
    );
}

export default DegreePlan;
