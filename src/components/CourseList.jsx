import React from 'react';
import CourseItem from './CourseItem';
import styles from "../styles/CourseList.module.css"

function CourseList({ courses, setCourses }) {
    const emptySlots = [];
    for (let i = 0; i < (6 - courses.length); i++) {
        emptySlots.push(<div></div>);
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
        <ul className={styles.courseList}>
            {emptySlots}
            {courseList}
        </ul>
    );
}

export default CourseList;
