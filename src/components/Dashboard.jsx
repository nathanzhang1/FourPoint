import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h2>Dashboard</h2>
            <Link to="/plan">Degree Plan</Link>
        </>
    )
}

export default Dashboard;