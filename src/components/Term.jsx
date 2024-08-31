import React, { useState } from "react";
import CourseList from './CourseList';
import styles from '../styles/Term.module.css';

function Term({ term }) {
    const [courses, setCourses] = useState([]);

    const handleAddCourse = (courseName) => {
      const newCourse = { id: Date.now(), name: courseName, grade: '' };
      setCourses([...courses, newCourse]);
    };

    return (
        <div className={styles.term}>
            <h3 className={styles.termHeader}>{term}</h3>
            <CourseList courses={courses} setCourses={setCourses} onAddCourse={handleAddCourse} />
        </div>
    )
}

export default Term;