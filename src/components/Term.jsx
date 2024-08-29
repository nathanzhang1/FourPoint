import React, { useState } from "react";
import CourseList from './CourseList';
import CourseInput from './CourseInput';
import styles from '../styles/Term.module.css';

function Term() {
    const [courses, setCourses] = useState([]);

    const handleAddCourse = (courseName) => {
      const newCourse = { id: Date.now(), name: courseName, grade: '' };
      setCourses([...courses, newCourse]);
    };

    return (
        <div className={styles.term}>
            <CourseInput onAddCourse={handleAddCourse} />
            <CourseList courses={courses} setCourses={setCourses}/>
        </div>
    )
}

export default Term;