import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/clientRoutes.jsx";
import styles from './styles/App.module.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className={styles.AppContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
