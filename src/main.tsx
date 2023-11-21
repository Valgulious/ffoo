import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'shared/providers/theme';
import { ToastContainer } from 'shared/ui/surfaces/ToastContainer';
import 'shared/config/dayjs';
import { router } from './router';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </ThemeProvider>
    </StrictMode>,
);
