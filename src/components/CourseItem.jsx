import React from 'react';
import { useDegreePlan } from '../context/DegreePlanContext';

function CourseItem({ course }) {
  const { updateCourse } = useDegreePlan();

  const handleGradeChange = (e) => {
    const updatedCourse = { ...course, grade: e.target.value };
    updateCourse(updatedCourse);
  };

  return (
    <li>
      {course.name} - Grade: 
      <input 
        type="text" 
        value={course.grade} 
        onChange={handleGradeChange} 
        placeholder="Enter grade"
      />
    </li>
  );
}

export default CourseItem;
