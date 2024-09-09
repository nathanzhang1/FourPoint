import React, { useState, useEffect } from "react";
import { CourseList } from './CourseList';
import styles from '../../styles/degree/Term.module.css';
import axios from 'axios';

function Term({ term, degreePlan }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/courses", {
            params: { term, plan: degreePlan }
        })
            .then(response => {
                setCourses(response.data);
                console.log("Successful GET of courses for this term");
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, [term, degreePlan]);

    const handleAddCourse = (courseName, professor, grade, units) => {
        const newCourse = { 
            key: Date.now() % 10000000, // Remove the first few digits so we have an integer for psql
            name: courseName, 
            professor: professor, 
            grade: grade, 
            units: units,
            term: term,
            plan: degreePlan, };
        
        axios.post("http://localhost:3000/api/courses", newCourse)
            .then(() => {
                setCourses([...courses, newCourse]);
                console.log("Successful POST of course");
            })
            .catch(error => {
                console.error('There was an error adding the course!', error);
            });
    };

    const handleUpdateCourse = (updatedCourse) => {
        axios.put(`http://localhost:3000/api/courses/${updatedCourse.key}`, updatedCourse)
            .then(() => {
                setCourses(courses.map(course => 
                    course.key === updatedCourse.key ? { ...course, ...updatedCourse } : course
                  ));
                console.log("Successful PUT of course");
            })
            .catch(error => {
                console.error('There was an error updating the course!', error);
            });
    };

    const handleDeleteCourse = (key) => {
        axios.delete(`http://localhost:3000/api/courses/${key}`)
            .then(() => {
                setCourses(courses.filter(course => course.key !== key));
                console.log("Successful DELETE of course");
            })
            .catch(error => {
                console.error('There was an error deleting the course!', error);
            });
      };

    return (
        <div className={styles.term}>
            <h3 className={styles.termHeader}>{term}</h3>
            <CourseList 
                courses={courses} 
                onAddCourse={handleAddCourse} 
                onUpdateCourse={handleUpdateCourse} 
                onDeleteCourse={handleDeleteCourse}/>
        </div>
    )
}

export default Term;