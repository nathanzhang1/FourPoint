import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Term from './Term';
import UpdatePlan from './UpdatePlan';
import OtherPlans from "./OtherPlans";
import DeletePlan from "./DeletePlan";
import { UserContentContext } from '../../context/UserContentContext';
import axios from 'axios';
import styles from '../../styles/degree/DegreePlan.module.css';

function generateTerms(startTerm, startYear, endTerm, endYear, summer, system) {
    const terms = [];

    // Default term order: Winter, Spring, Summer, Fall
    const allTerms = system === "Quarter"
        ? ["Winter", "Spring", ...(summer === "Yes" ? ["Summer"] : []), "Fall"]
        : ["Spring", ...(summer === "Yes" ? ["Summer"] : []), "Fall"];  // Semester has no Winter

    let year = Number(startYear);
    let termIndex = allTerms.indexOf(startTerm);

    while (year <= Number(endYear)) {
        const currentTerm = allTerms[termIndex];
        terms.push(`${currentTerm} ${year}`);

        if (currentTerm === endTerm && year === Number(endYear)) {
            break;  // Stop once we reach the final term and year.
        }

        termIndex += 1;
        if (termIndex >= allTerms.length) {
            termIndex = 0;  // Loop back to the start of the term cycle
            year += 1;
        }
    }

    return terms;
}

function DegreePlan() {
    const { id } = useParams();  // Get the dynamic id from the URL
    const { plans, updatePlan, deletePlan } = useContext(UserContentContext);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [totalUnits, setTotalUnits] = useState(0);
    const [totalGPA, setTotalGPA] = useState("N/A");

    const plan = plans.find((plan) => plan.id === id);

    useEffect(() => {
        if (!plan) return;

        axios.get("http://localhost:3000/api/courses", {
            params: { plan: plan }
        })
            .then(response => {
                const fetchedCourses = response.data;
                setCourses(fetchedCourses);
                calculateTotalUnitsAndGPA(fetchedCourses);
                console.log("Successful GET of courses");
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, [plan]);

    if (!plan) {
        return <div>Loading plan...</div>;
    }

    const terms = generateTerms(plan.startterm, plan.startyear, plan.endterm, plan.endyear, plan.summer, plan.system);

    const handleDeletePlan = (id) => {
        deletePlan(id);
        navigate('/');
    };

    const handleUpdatePlan = (updatedPlan) => {
        updatePlan(updatedPlan);
    };

    const calculateTotalUnitsAndGPA = (courses) => {
        const gradePoints = {
            'A+': 4.0,
            'A': 4.0,
            'A-': 3.7,
            'B+': 3.3,
            'B': 3.0,
            'B-': 2.7,
            'C+': 2.3,
            'C': 2.0,
            'C-': 1.7,
            'D+': 1.3,
            'D': 1.0,
            'D-': 0.7,
            'F': 0.0,
        };

        let totalPoints = 0;
        let totalUnits = 0;
        let unitCount = 0;

        courses.forEach(course => {
            const grade = course.grade.toUpperCase();
            const units = Number(course.units) || 0;
            const gradePoint = gradePoints[grade];

            if (gradePoint !== undefined && units > 0) {
                totalPoints += gradePoint * units;
                totalUnits += units;
            }
        });

        courses.forEach(course => {
            const units = Number(course.units) || 0;
            if (course.grade) {
                unitCount += units;
            }
        });

        setTotalUnits(unitCount);
        setTotalGPA(totalUnits > 0 ? (totalPoints / totalUnits).toFixed(3) : 'N/A');
    };

    const getCoursesForTerm = (term) => {
        return courses.filter(course => course.term === term);
    };

    const handleAddCourse = (newCourse) => {
        axios.post("http://localhost:3000/api/courses", newCourse)
            .then(() => {
                const updatedCourses = [...courses, newCourse];
                setCourses(updatedCourses);
                calculateTotalUnitsAndGPA(updatedCourses);
                console.log("Successful POST of course");
            })
            .catch(error => {
                console.error('There was an error adding the course!', error);
            });
    };

    const handleUpdateCourse = (updatedCourse) => {
        axios.put(`http://localhost:3000/api/courses/${updatedCourse.key}`, updatedCourse)
            .then(() => {
                const updatedCourses = courses.map(course => 
                    course.key === updatedCourse.key ? { ...course, ...updatedCourse } : course
                );
                setCourses(updatedCourses);
                calculateTotalUnitsAndGPA(updatedCourses);
                console.log("Successful PUT of course");
            })
            .catch(error => {
                console.error('There was an error updating the course!', error);
            });
    };

    const handleDeleteCourse = (key) => {
        axios.delete(`http://localhost:3000/api/courses/${key}`)
            .then(() => {
                const updatedCourses = courses.filter(course => course.key !== key);
                setCourses(updatedCourses);
                calculateTotalUnitsAndGPA(updatedCourses);
                console.log("Successful DELETE of course");
            })
            .catch(error => {
                console.error('There was an error deleting the course!', error);
            });
      };
    
    return (
        <div className={styles.rootContainer}>
            <div className={styles.planHeaderContainer}>
                <div className={styles.planDisplays}>
                    <h2 className={styles.planHeader}>{plan.name || "Degree Plan"}</h2>
                    <div className={styles.planHeader}>Total units: {totalUnits}</div>
                    <div className={styles.planHeader}>Total GPA: {totalGPA}</div>
                </div>
                <div className={styles.planButtons}>
                    <OtherPlans plans={plans}/>
                    <UpdatePlan plan={plan} handleUpdatePlan={handleUpdatePlan}/>
                    <DeletePlan plan={plan} handleDeletePlan={handleDeletePlan}/>
                </div>
            </div>
            <div className={styles.planContainer}>
                {terms.map(term => (
                    <Term 
                        key={term}
                        term={term}
                        degreePlan={id}
                        courses={getCoursesForTerm(term)}
                        onAddCourse={handleAddCourse}
                        onUpdateCourse={handleUpdateCourse}
                        onDeleteCourse={handleDeleteCourse}
                    />
                ))}
            </div>
        </div>
    );
}

export default DegreePlan;
