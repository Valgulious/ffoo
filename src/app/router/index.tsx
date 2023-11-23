import { createBrowserRouter } from 'react-router-dom';
import { ORDERS, ROOT } from 'shared/const/pageRoutes';
import { RegistrationPage } from 'pages/RegistrationPage';
import { OrdersPage } from 'pages/OrdersPage';
import ErrorPage from 'pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: ROOT,
        element: <RegistrationPage />,
        errorElement: <ErrorPage />
    },
    {
        path: ORDERS,
        element: <OrdersPage />,
    },
]);
