import Dashboard from './components/Dashboard';
import DegreePlan from './components/DegreePlan';

const routes = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "plan",
        element: <DegreePlan />,
    },
]

export default routes;