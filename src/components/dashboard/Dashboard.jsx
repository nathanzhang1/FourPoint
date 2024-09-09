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
        { id: 1, name: "CS + Math of Comp" },
        { id: 2, name: "CS" },
        { id: 3, name: "CS + Stats and DS" },
        { id: 4, name: "CS + DS Engineering" },
    ]);

    return (
        <div className={styles.dashboard}>
            <Courses courses={courses} />
            <div>
                <Assessments assessments={assessments} />
                <Plans plans={plans} />
            </div>
        </div>
    );
}

export default Dashboard;


// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/dashboard/Dashboard.module.css";

// function Dashboard() {
//     return (
//             <div className={styles.dashboard}>
//                 <div className={styles.projectsContainer}>
//                     <div className={styles.projectsHeader}>
//                         <p>Your Courses</p>
//                     </div>
//                     <div className={styles.projects}>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 1</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 2</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 3</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 4</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 5</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.projectText}>
//                                 <div className={styles.projectHeader}>Course 6</div>
//                                 <div className={styles.projectDescription}>
//                                     Upcoming tasks
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.announcementsContainer}>
//                     <div className={styles.announcementsHeader}>
//                         <p>Assessments</p>
//                     </div>
//                     <div className={styles.announcements}>
//                         <div>
//                             <div className={styles.h}>CS Midterm</div>
//                             <div className={styles.b}>
//                             This is an announcement, testing text wrapping on multiple lines
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.h}>Math Final</div>
//                             <div className={styles.b}>
//                             This is an announcement, testing text wrapping on multiple lines
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.h}>CS Assignment</div>
//                             <div className={styles.b}>
//                             This is an announcement, testing text wrapping on multiple lines
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.h}>Squirtle</div>
//                             <div className={styles.b}>
//                             This is an announcement, testing text wrapping on multiple lines
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.trendingHeader}>
//                         <p>Degree Plans</p>
//                         <button className={styles.add}>
//                             +
//                         </button>
//                     </div>
//                     <div className={styles.trending}>
//                         <div className={styles.trendingContainer}>
//                             <div className={styles.trendingText}>
//                                 CS + Math of Comp
//                             </div>
//                         </div>
//                         <div className={styles.trendingContainer}>
//                             <div className={styles.trendingText}>
//                                 CS
//                             </div>
//                         </div>
//                         <div className={styles.trendingContainer}>
//                             <div className={styles.trendingText}>
//                                 CS + Stats and DS
//                             </div>
//                         </div>
//                         <div className={styles.trendingContainer}>
//                             <div className={styles.trendingText}>
//                                 CS + DS Engineering
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

// export default Dashboard;