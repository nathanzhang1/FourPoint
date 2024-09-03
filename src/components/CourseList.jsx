import React from 'react';
import { CourseItem, EmptySlot } from './CourseItem';
import styles from "../styles/CourseList.module.css";

export function Totals({ totalUnits, gpa }) {

    return (
        <div className={styles.totals}>
            <div>Term units: {totalUnits}</div>
            <div>Term GPA: {gpa}</div>
        </div>
    )
}

export function CourseList({ courses, onAddCourse, onUpdateCourse, onDeleteCourse}) {
    const emptySlots = [];
    for (let i = 0; i < (6 - courses.length); i++) {
        let key = Math.random();
        emptySlots.push(<EmptySlot key={key} onAddCourse={onAddCourse}/>);
    }

    let courseList = courses.map(course => (
        <CourseItem 
            key={course.key} 
            course={course} 
            onAddCourse={onAddCourse}
            onUpdateCourse={onUpdateCourse}
            onDeleteCourse={onDeleteCourse} />
    ));
    courseList.reverse();

    const calculateTotalUnits = () => {
        return courses.reduce((total, course) => Number(total) + (Number(course.units) || 0), 0);
    };

    const calculateGPA = () => {
        const gradePoints = {
            'A+': 4.0,
            'A': 4.0,
            'A-': 3.7,
            'B+': 3.3,
            'B': 3.0,
            'B-': 2.7,
            'C+': 2.3,
            'C': 2.0,
            'C-': 1.7,
            'D+': 1.3,
            'D': 1.0,
            'D-': 0.7,
            'F': 0.0,
        };

        let totalPoints = 0;
        let totalUnits = 0;

        courses.forEach(course => {
            const grade = course.grade.toUpperCase();
            const units = Number(course.units) || 0;
            const gradePoint = gradePoints[grade];

            if (gradePoint !== undefined && units > 0) {
                totalPoints += gradePoint * units;
                totalUnits += units;
            }
        });

        return totalUnits > 0 ? (totalPoints / totalUnits).toFixed(3) : 'N/A';
    };

    const totalUnits = calculateTotalUnits();
    const gpa = calculateGPA();

    return (
        <div className={styles.courseList}>
            {emptySlots}
            {courseList}
            <Totals totalUnits={totalUnits} gpa={gpa}/>
        </div>
    );
}