import React, { useState } from 'react';
import CourseModal from "./CourseModal";
import styles from "../styles/CourseItem.module.css";

export function EmptySlot({onAddCourse}) {
    const [isCourseModalOpen, setCourseModalOpen] = useState(false);

    const handleOpenCourseModal = () => {
        setCourseModalOpen(true);
    }

    const handleCloseCourseModal = () => {
        setCourseModalOpen(false);
    }

    return (
        <>
            <button className={styles.emptySlot} onClick={handleOpenCourseModal}></button>
            <CourseModal isOpen={isCourseModalOpen} onClose={handleCloseCourseModal} onAddCourse={onAddCourse}></CourseModal>
        </>
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