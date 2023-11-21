import { FC } from 'react';
import {
    ToastContainer as BaseToastContainer,
    ToastContainerProps as BaseToastContainerProps,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ToastContainerProps = BaseToastContainerProps;

export const ToastContainer: FC<ToastContainerProps> = (props) => {
    return (
        <BaseToastContainer
            position="bottom-left"
            newestOnTop
            limit={5}
            autoClose={2500}
            draggablePercent={65}
            {...props}
        />
    );
};
