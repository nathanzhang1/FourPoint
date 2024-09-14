import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanModal from "./PlanModal.jsx";
import styles from "../../styles/dashboard/Plans.module.css";

function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function Plans({ plans, setPlans }) {
    const [isPlanModalOpen, setPlanModalOpen] = useState(false);

    const handleOpenPlanModal = () => {
        setPlanModalOpen(true);
    }

    const handleClosePlanModal = () => {
        setPlanModalOpen(false);
    }

    const navigate = useNavigate();
    const handlePlanClick = (id, plan) => {
        navigate(`/plan/${id}`, { state: { ...plan } });
    };

    const handleAddPlan = (plan) => {
        const newPlan = {
            id: generateRandomId(),
            name: plan.name,
            startTerm: plan.startTerm,
            startYear: plan.startYear,
            endTerm: plan.endTerm,
            endYear: plan.endYear,
            system: plan.system,
            summer: plan.summer,
            default: plan.default,
        };
        setPlans([...plans, newPlan]);
    };

    return (
        <div className={styles.announcementsContainer}>
            <div className={styles.trendingHeader}>
                <p>Degree Plans</p>
                <button className={styles.add} onClick={handleOpenPlanModal}>+</button>
                <PlanModal 
                    isOpen={isPlanModalOpen} 
                    onClose={handleClosePlanModal} 
                    onAddPlan={handleAddPlan}>
                </PlanModal>
            </div>
            <div className={styles.trending}>
                {plans.map(plan => (
                    <div 
                        className={styles.trendingContainer} 
                        key={plan.id} 
                        onClick={() => handlePlanClick(plan.id, plan)}
                    >
                        <div className={styles.trendingText}>{plan.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;