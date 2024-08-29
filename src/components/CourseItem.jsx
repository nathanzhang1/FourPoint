import React from 'react';

function CourseItem({ course, courses, setCourses }) {

  const handleGradeChange = (e) => {
    const updatedCourse = { ...course, grade: e.target.value };
    setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
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
