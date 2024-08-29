import React from 'react';
import styles from "../styles/CourseItem.module.css"

function CourseItem({ course, courses, setCourses }) {

  const handleGradeChange = (e) => {
    const updatedCourse = { ...course, grade: e.target.value };
    setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
  };

  return (
    <li className={styles.courseItem}>
      {course.name} - Grade: 
      <input 
        type="text" 
        value={course.grade} 
        onChange={handleGradeChange} 
        className={styles.gradeInput}
      />
    </li>
  );
}

export default CourseItem;
