import React, { useContext, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Term from './Term';
import { UpdatePlanModal } from '../dashboard/PlanModal';
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
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
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
        setUpdateModalOpen(false);
    };
    
    return (
        <div className={styles.rootContainer}>
            <div className={styles.planHeaderContainer}>
                <h2 className={styles.planHeader}>{plan.name || "Degree Plan"}</h2>
                <div className={styles.planSettings}>
                    <svg onClick={() => setUpdateModalOpen(true)} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6" />
                    </svg>
                </div>
            </div>
            <div className={styles.planContainer}>
                {terms.map(term => (
                    <Term key={Math.random()} term={term} degreePlan={id} />
                ))}
            </div>
            {isUpdateModalOpen && (
                <UpdatePlanModal
                    plan={plan}
                    onUpdatePlan={handleUpdatePlan}
                    onDeletePlan={handleDeletePlan}
                    onClose={() => setUpdateModalOpen(false)}
                    isOpen={isUpdateModalOpen}
                />
            )}
        </div>
    );
}

export default DegreePlan;
