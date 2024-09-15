import React, { createContext, useState } from 'react';

export const UserContentContext = createContext();

export function UserContentProvider({ children }) {
    const [plans, setPlans] = useState([
        { id: "B", name: "CS + Math of Comp", startTerm: "Fall", startYear: "2022", endTerm: "Spring", endYear: "2026", summer: "Yes", system: "Quarter" },
        { id: "A", name: "CS", startTerm: "Fall", startYear: "2023", endTerm: "Spring", endYear: "2027", summer: "No", system: "Quarter" },
        { id: "C", name: "CS + Stats and DS", startTerm: "Fall", startYear: "2023", endTerm: "Fall", endYear: "2027", summer: "Yes", system: "Semester" },
        { id: "D", name: "CS + DS Engineering", startTerm: "Spring", startYear: "2022", endTerm: "Fall", endYear: "2028", summer: "No", system: "Semester" },
    ]);

    const updatePlan = (updatedPlan) => {
        setPlans((prevPlans) =>
            prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
        );
    };

    const deletePlan = (planId) => {
        setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== planId));
    };

    return (
        <UserContentContext.Provider value={{ plans, setPlans, updatePlan, deletePlan }}>
            {children}
        </UserContentContext.Provider>
    );
}
