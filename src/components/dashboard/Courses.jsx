import React from "react";
import styles from "../../styles/dashboard/Courses.module.css";

function Courses({ courses }) {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
                <p>Your Courses</p>
            </div>
            <div className={styles.projects}>
                {courses.map(course => (
                    <div key={course.id}>
                        <div className={styles.projectText}>
                            <div className={styles.projectHeader}>{course.name}</div>
                            <div className={styles.projectDescription}>{course.tasks}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
