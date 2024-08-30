import React from 'react';
import { CourseItem, EmptySlot } from './CourseItem';
import styles from "../styles/CourseList.module.css"

function CourseList({ courses, setCourses }) {
    const emptySlots = [];
    for (let i = 0; i < (6 - courses.length); i++) {
        let key = Math.random();
        emptySlots.push(<EmptySlot key={key}/>);
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
        </div>
    );
}

export default CourseList;
