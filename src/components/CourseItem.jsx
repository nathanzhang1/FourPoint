import React, { useState } from 'react';
import { UpdateCourseModal, CourseModal } from "./CourseModal";
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
            <CourseModal 
                isOpen={isCourseModalOpen} 
                onClose={handleCloseCourseModal} 
                onAddCourse={onAddCourse}>
            </CourseModal>
        </>
    )
}

export function CourseItem({ course, onUpdateCourse, onDeleteCourse }) {
    const [isCourseModalOpen, setCourseModalOpen] = useState(false);

    const handleOpenCourseModal = () => {
        setCourseModalOpen(true);
    }

    const handleCloseCourseModal = () => {
        setCourseModalOpen(false);
    }

    return (
        <>
            <button className={styles.courseItem} onClick={handleOpenCourseModal}>
                <div>{course.name.toUpperCase()}</div>
                <div>{course.grade.toUpperCase()}</div>
                <div>{course.units}</div>
            </button>
            <UpdateCourseModal
                isOpen={isCourseModalOpen} 
                onClose={handleCloseCourseModal} 
                onUpdateCourse={onUpdateCourse}
                onDeleteCourse={onDeleteCourse}
                course={course}>
            </UpdateCourseModal>
        </>
    );
}