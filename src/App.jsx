import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/dashboard/Header.jsx';
import Sidebar from './components/dashboard/Sidebar.jsx';
import routes from "./routes/clientRoutes.jsx";
import styles from './styles/App.module.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className={styles.AppContainer}>
      <div className={styles.App}>
        <Sidebar />
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
