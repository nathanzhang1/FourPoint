import Dashboard from '../components/dashboard/Dashboard.jsx';
import DegreePlan from '../components/degree/DegreePlan.jsx';

const routes = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "plan/:id",
        element: <DegreePlan />,
    },
]

export default routes;