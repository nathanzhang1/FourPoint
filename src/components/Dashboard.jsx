import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
    return (
            <div className={styles.dashboard}>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsHeader}>
                        <p>Your Courses</p>
                    </div>
                    <div className={styles.projects}>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 1</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 2</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 3</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 4</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 5</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Course 6</div>
                                <div className={styles.projectDescription}>
                                    Upcoming tasks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.announcementsContainer}>
                    <div className={styles.announcementsHeader}>
                        <p>Assessments</p>
                    </div>
                    <div className={styles.announcements}>
                        <div>
                            <div className={styles.h}>CS Midterm</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>Math Final</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>CS Assignment</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>Squirtle</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingHeader}>
                        <p>Degree Plans</p>
                        <button className={styles.add}>
                            +
                        </button>
                    </div>
                    <div className={styles.trending}>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                CS + Math of Comp
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                CS
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                CS + Stats and DS
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                CS + DS Engineering
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard;