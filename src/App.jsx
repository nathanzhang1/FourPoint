import React from 'react';
import { DegreePlanProvider } from './context/DegreePlanContext';
import DegreePlan from './components/DegreePlan';
import Header from './components/Header';
import styles from './styles/App.module.css';

function App() {
  return (
    <DegreePlanProvider>
      <div className={styles.App}>
        <Header />
        <DegreePlan />
      </div>
    </DegreePlanProvider>
  );
}

export default App;
