import React, { useState } from "react";
import CourseList from './CourseList';
import CourseInput from './CourseInput';
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
            <CourseInput onAddCourse={handleAddCourse} />
            <CourseList courses={courses} setCourses={setCourses} onAddCourse={handleAddCourse} />
        </div>
    )
}

export default Term;