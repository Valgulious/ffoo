import { createBrowserRouter } from 'react-router-dom';
import { ORDERS, ROOT } from 'shared/const/pageRoutes';
import { RegistrationPage } from 'pages/RegistrationPage';
import { OrdersPage } from 'pages/OrdersPage';

export const router = createBrowserRouter([
    {
        path: ROOT,
        element: <RegistrationPage />,
    },
    {
        path: ORDERS,
        element: <OrdersPage />,
    },
]);
