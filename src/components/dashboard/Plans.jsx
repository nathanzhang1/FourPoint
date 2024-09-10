import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handlePlanClick = (id, name) => {
        navigate(`/plan/${id}`, { state: { name } });
    };

    const handleAddPlan = () => {
        const name = prompt("Enter the name of the new degree plan");
        if (name) {
            const newPlan = {
                id: generateRandomId(),
                name: name,
            };
            setPlans([...plans, newPlan]);
        }
    };

    return (
        <div className={styles.announcementsContainer}>
            <div className={styles.trendingHeader}>
                <p>Degree Plans</p>
                <button className={styles.add} onClick={handleAddPlan}>+</button>
            </div>
            <div className={styles.trending}>
                {plans.map(plan => (
                    <div 
                        className={styles.trendingContainer} 
                        key={plan.id} 
                        onClick={() => handlePlanClick(plan.id, plan.name)}
                    >
                        <div className={styles.trendingText}>{plan.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
