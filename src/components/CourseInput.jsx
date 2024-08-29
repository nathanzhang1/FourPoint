import React, { useState } from 'react';

function CourseInput({ onAddCourse }) {
  const [courseName, setCourseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName) {
      onAddCourse(courseName);
      setCourseName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Enter course name"
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseInput;
