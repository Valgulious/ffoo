import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'shared/ui/surfaces/ToastContainer';
import 'app/config/dayjs';
import { ThemeProvider } from 'app/providers/theme';
import { router } from 'app/router';
import { RootLayout } from 'app/layout';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <RootLayout>
                <RouterProvider router={router} />
                <ToastContainer />
            </RootLayout>
        </ThemeProvider>
    </StrictMode>,
);
