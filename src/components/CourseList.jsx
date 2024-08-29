import React from 'react';
import CourseItem from './CourseItem';

function CourseList({ courses, setCourses }) {

  return (
    <ul>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} courses={courses} setCourses={setCourses} />
      ))}
    </ul>
  );
}

export default CourseList;
