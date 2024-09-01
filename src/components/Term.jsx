import React, { useState } from "react";
import { CourseList } from './CourseList';
import styles from '../styles/Term.module.css';

function Term({ term }) {
    const [courses, setCourses] = useState([]);

    const handleAddCourse = (courseName, professor, grade, units) => {
      const newCourse = { 
        id: Date.now(), 
        name: courseName, 
        professor: professor, 
        grade: grade, 
        units: units };
      setCourses([...courses, newCourse]);
    };

    const handleUpdateCourse = (updatedCourse) => {
        setCourses(courses.map(course => 
          course.id === updatedCourse.id ? { ...course, ...updatedCourse } : course
        ));
    };

    const handleDeleteCourse = (id) => {
        setCourses(courses.filter(course => course.id !== id));
      };

    return (
        <div className={styles.term}>
            <h3 className={styles.termHeader}>{term}</h3>
            <CourseList 
                courses={courses} 
                onAddCourse={handleAddCourse} 
                onUpdateCourse={handleUpdateCourse} 
                onDeleteCourse={handleDeleteCourse}/>
        </div>
    )
}

export default Term;