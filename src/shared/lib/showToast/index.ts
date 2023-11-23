import type { Toast } from 'shared/ui/feedback/Toast';

type ToastParameters = Parameters<typeof Toast>;

export const showToast = async (...args: ToastParameters) => {
    (await import('shared/ui/feedback/Toast')).Toast(...args);
};
