import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
    const [courses, setCourses] = useState([]);

    // Fetch courses when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3000/api/courses')
            .then(response => {
                setCourses(response.data);
                console.log("Successful fetch")
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    return (
        <>
            <h2>Dashboard</h2>
            <Link to="/plan">Degree Plan</Link>
            <div>
            {courses.map(course => (
                <div key={course.id}>
                    <h4>{course.name}</h4>
                    <p>Professor: {course.professor}</p>
                    <p>Grade: {course.grade}</p>
                    <p>Units: {course.units}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Dashboard;