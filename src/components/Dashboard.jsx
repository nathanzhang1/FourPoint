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
                                    Project 1 description: Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Project 2</div>
                                <div className={styles.projectDescription}>
                                    Project 2 description: Lorem
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Project 3</div>
                                <div className={styles.projectDescription}>
                                    Project 3 description: Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, eu fugiat nulla pariatur.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Project 4</div>
                                <div className={styles.projectDescription}>
                                    Project 4 description: Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Project 5</div>
                                <div className={styles.projectDescription}>
                                    Project 5 description: Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.projectText}>
                                <div className={styles.projectHeader}>Project 6</div>
                                <div className={styles.projectDescription}>
                                    Project 6 description: Lorem ipsum dolor sit amet, Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
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
                            <div className={styles.h}>Announcement 1</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>Announcement 2</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>Announcement 3</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                        <div>
                            <div className={styles.h}>Announcement 4</div>
                            <div className={styles.b}>
                            This is an announcement, testing text wrapping on multiple lines
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingHeader}>
                        <p>Tasks</p>
                    </div>
                    <div className={styles.trending}>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                <div className={styles.username}>@username1</div>
                                <div className={styles.projectName}>Project A</div>
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                <div className={styles.username}>@username2</div>
                                <div className={styles.projectName}>Project B</div>
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                <div className={styles.username}>@username3</div>
                                <div className={styles.projectName}>Project C</div>
                            </div>
                        </div>
                        <div className={styles.trendingContainer}>
                            <div className={styles.trendingText}>
                                <div className={styles.username}>@username4</div>
                                <div className={styles.projectName}>Project D</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard;