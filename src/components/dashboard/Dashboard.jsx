import React, { useState, useContext } from "react";
import Courses from "./Courses";
import Assessments from "./Assessments";
import Plans from "./Plans";
import { UserContentContext } from '../../context/UserContentContext';
import styles from "../../styles/dashboard/Dashboard.module.css";

function Dashboard() {
    const [courses, setCourses] = useState([
        { id: 1, name: "Course 1", tasks: "Upcoming tasks" },
        { id: 2, name: "Course 2", tasks: "Upcoming tasks" },
        { id: 3, name: "Course 3", tasks: "Upcoming tasks" },
        { id: 4, name: "Course 4", tasks: "Upcoming tasks" },
        { id: 5, name: "Course 5", tasks: "Upcoming tasks" },
        { id: 6, name: "Course 6", tasks: "Upcoming tasks" },
    ]);

    const [assessments, setAssessments] = useState([
        { id: 1, title: "CS Midterm", description: "This is an announcement, testing text wrapping on multiple lines" },
        { id: 2, title: "Math Final", description: "This is an announcement, testing text wrapping on multiple lines" },
        { id: 3, title: "CS Assignment", description: "This is an announcement, testing text wrapping on multiple lines" },
        { id: 4, title: "Squirtle", description: "This is an announcement, testing text wrapping on multiple lines" },
    ]);

    const { userID, plans, addPlan } = useContext(UserContentContext);

    return (
        <div className={styles.dashboard}>
            <Courses courses={courses} />
            <div>
                <Assessments assessments={assessments} />
                <Plans plans={plans} addPlan={addPlan} userID={userID} />
            </div>
        </div>
    );
}

export default Dashboard;