import React from 'react';
import styles from "../styles/CourseItem.module.css"

export function EmptySlot() {
    return (
        <div className={styles.emptySlot}></div>
    )
}

export function CourseItem({ course, courses, setCourses }) {

  const handleGradeChange = (e) => {
    const updatedCourse = { ...course, grade: e.target.value };
    setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
  };

  return (
    <div className={styles.courseItem}>
      {course.name.toUpperCase()} - Grade: 
      <input 
        type="text" 
        value={course.grade.toUpperCase()} 
        onChange={handleGradeChange} 
        className={styles.gradeInput}
      />
    </div>
  );
}

export function Totals() {
    return (
        <div className={styles.totals}>
            <div>Total units:</div>
            <div>Term GPA:</div>
        </div>
    )
}