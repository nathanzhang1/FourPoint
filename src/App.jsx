import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/clientRoutes.jsx";
import { UserContentProvider } from './context/UserContentContext';
import styles from './styles/App.module.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className={styles.AppContainer}>
      <UserContentProvider>
        <RouterProvider router={router} />
      </UserContentProvider>
    </div>
  );
}

export default App;
