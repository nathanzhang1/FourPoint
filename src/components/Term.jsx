import React from "react";
import { useDegreePlan } from '../context/DegreePlanContext';
import CourseList from './CourseList';
import CourseInput from './CourseInput';
import styles from '../styles/Term.module.css';

function Term() {
    const { addCourse } = useDegreePlan();

    const handleAddCourse = (courseName) => {
      const newCourse = { id: Date.now(), name: courseName, grade: '' };
      addCourse(newCourse);
    };

    return (
        <div className={styles.term}>
            <CourseInput onAddCourse={handleAddCourse} />
            <CourseList />
        </div>
    )
}

export default Term;