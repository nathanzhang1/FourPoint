import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';
import styles from '../styles/Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;