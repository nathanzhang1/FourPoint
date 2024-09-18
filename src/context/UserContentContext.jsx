import React, { createContext, useState , useEffect} from 'react';
import axios from 'axios';

export const UserContentContext = createContext();

export function UserContentProvider({ children }) {
    const [userID, setUserID] = useState("nathanzhang");

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/plans", {
            params: { userID }
        })
            .then(response => {
                setPlans(response.data);
                console.log("Successful GET of degree plans for this user");
            })
            .catch(error => {
                console.error('There was an error fetching the degree plans!', error);
            });
    }, []);

    const addPlan = (newPlan) => {
        axios.post("http://localhost:3000/api/plans", newPlan)
            .then(() => {
                setPlans([...plans, newPlan]);
                console.log("Successful POST of plan");
            })
            .catch(error => {
                console.error('There was an error adding the plan!', error);
            });
    }

    const updatePlan = (updatedPlan) => {
        if (updatedPlan.defaultplan === "Yes") {
            axios.put(`http://localhost:3000/api/plans/${updatedPlan.id}`, updatedPlan)
            .then(() => {
                const updatedPlans = plans.map((p) => 
                    p.id === updatedPlan.id ? { ...updatedPlan, defaultplan: "Yes" } : { ...p, defaultplan: "No" }
                );
                setPlans(updatedPlans);
                console.log("Successful update of default plan");
            })
            .catch(error => {
                console.error('There was an error updating the default plan!', error);
            });
        }
        else {
            axios.put(`http://localhost:3000/api/plans/${updatedPlan.id}`, updatedPlan)
            .then(() => {
                setPlans((prevPlans) =>
                    prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
                );
                console.log("Successful PUT of plan");
            })
            .catch(error => {
                console.error('There was an error updating the plan!', error);
            });
        }
    };

    const deletePlan = (planID) => {
        axios.delete(`http://localhost:3000/api/plans/${planID}`)
            .then(() => {
                setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== planID));
                console.log("Successful DELETE of plan");
            })
            .catch(error => {
                console.error('There was an error deleting the plan!', error);
            });
    };

    return (
        <UserContentContext.Provider value={{ userID, plans, addPlan, updatePlan, deletePlan }}>
            {children}
        </UserContentContext.Provider>
    );
}
