import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import routes from "./routes/clientRoutes.jsx";
import styles from './styles/App.module.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
