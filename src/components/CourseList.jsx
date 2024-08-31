import React from 'react';
import { CourseItem, EmptySlot, Totals } from './CourseItem';
import styles from "../styles/CourseList.module.css"

function CourseList({ courses, setCourses, onAddCourse }) {
    const emptySlots = [];
    for (let i = 0; i < (5 - courses.length); i++) {
        let key = Math.random();
        emptySlots.push(<EmptySlot key={key} onAddCourse={onAddCourse}/>);
    }

    let courseList = courses.map(course => (
        <CourseItem 
            key={course.id} 
            course={course} 
            courses={courses} 
            setCourses={setCourses} />
    ));
    courseList.reverse();

    return (
        <div className={styles.courseList}>
            {emptySlots}
            {courseList}
            <Totals />
        </div>
    );
}

export default CourseList;
