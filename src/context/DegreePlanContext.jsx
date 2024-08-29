// import React, { createContext, useState, useContext } from 'react';

// const DegreePlanContext = createContext();

// export function useDegreePlan() {
//   return useContext(DegreePlanContext);
// }

// export function DegreePlanProvider({ children }) {
//   const [courses, setCourses] = useState([]);

//   const addCourse = (course) => {
//     setCourses([...courses, course]);
//   };

//   const updateCourse = (updatedCourse) => {
//     setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
//   };

//   return (
//     <DegreePlanContext.Provider value={{ courses, addCourse, updateCourse }}>
//       {children}
//     </DegreePlanContext.Provider>
//   );
// }
