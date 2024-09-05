import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <Link to="/plan">Degree Plan</Link>
        </div>
    )
}

export default Dashboard;