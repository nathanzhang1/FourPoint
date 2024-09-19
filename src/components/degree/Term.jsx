import React from "react";
import { CourseList } from './CourseList';
import styles from '../../styles/degree/Term.module.css';

function Term({ term, courses, onAddCourse, onUpdateCourse, onDeleteCourse, degreePlan }) {
    const handleAddCourse = (courseName, professor, grade, units) => {
        const newCourse = { 
            key: Date.now() % 10000000, // Use the same key logic
            name: courseName, 
            professor: professor, 
            grade: grade, 
            units: units,
            term: term,
            plan: degreePlan, // Pass along the degree plan if needed
        };
        onAddCourse(newCourse);
    };

    return (
        <div className={styles.term}>
            <h3 className={styles.termHeader}>{term}</h3>
            <CourseList 
                courses={courses} 
                onAddCourse={handleAddCourse} 
                onUpdateCourse={onUpdateCourse} 
                onDeleteCourse={onDeleteCourse}/>
        </div>
    )
}

export default Term;