import React from "react";
import styles from "../../styles/dashboard/Assessments.module.css";

function Assessments({ assessments }) {
    return (
        <div className={styles.announcementsContainer}>
            <div className={styles.announcementsHeader}>
                <p>Assessments</p>
            </div>
            <div className={styles.announcements}>
                {assessments.map(assessment => (
                    <div key={assessment.id}>
                        <div className={styles.h}>{assessment.title}</div>
                        <div className={styles.b}>{assessment.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assessments;
