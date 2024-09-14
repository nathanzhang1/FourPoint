import React, { useState } from "react";
import Courses from "./Courses";
import Assessments from "./Assessments";
import Plans from "./Plans";
import styles from "../../styles/dashboard/Dashboard.module.css";

function Dashboard() {
    // Manage the state for courses, assessments, and plans
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

    const [plans, setPlans] = useState([
        { id: 1, name: "CS + Math of Comp", startTerm: "Fall", startYear: "2022", endTerm: "Spring", endYear: "2026" },
        { id: "A", name: "CS", startTerm: "Fall", startYear: "2023", endTerm: "Spring", endYear: "2027" },
        { id: 3, name: "CS + Stats and DS", startTerm: "Winter", startYear: "2023", endTerm: "Fall", endYear: "2027" },
        { id: 4, name: "CS + DS Engineering", startTerm: "Spring", startYear: "2022", endTerm: "Winter", endYear: "2028" },
    ]);

    return (
        <div className={styles.dashboard}>
            <Courses courses={courses} />
            <div>
                <Assessments assessments={assessments} />
                <Plans plans={plans} setPlans={setPlans} />
            </div>
        </div>
    );
}

export default Dashboard;