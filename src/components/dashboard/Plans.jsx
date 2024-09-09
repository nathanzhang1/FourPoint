import React from "react";
import styles from "../../styles/dashboard/Plans.module.css";

function Plans({ plans }) {
    return (
        <div className={styles.announcementsContainer}>
            <div className={styles.trendingHeader}>
                <p>Degree Plans</p>
                <button className={styles.add}>+</button>
            </div>
            <div className={styles.trending}>
                {plans.map(plan => (
                    <div className={styles.trendingContainer} key={plan.id}>
                        <div className={styles.trendingText}>{plan.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
