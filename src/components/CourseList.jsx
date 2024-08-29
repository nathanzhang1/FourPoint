import React from 'react';
import { useDegreePlan } from '../context/DegreePlanContext';
import CourseItem from './CourseItem';

function CourseList() {
  const { courses } = useDegreePlan();

  return (
    <ul>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default CourseList;
