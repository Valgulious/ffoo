import { toast, ToastOptions } from 'react-toastify';

export const Toast = (message: string, options?: ToastOptions) => {
    toast(message, {
        ...options,
    });
};
