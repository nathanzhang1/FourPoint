import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import DegreePlan from '../components/degree/DegreePlan';
import Layout from '../components/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,  // This will include Sidebar, Header, and Outlet for child routes
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/plan/:id',
        element: <DegreePlan />,
      },
    ],
  },
];

export default routes;