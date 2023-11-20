import type { Order } from 'entities/Order';
import { delay } from 'shared/lib/helpers/delay';
import { ORDERS_LOCAL_STORAGE_NAME } from 'shared/const/localStorage';

export const useOrder = () => {
    const getOrders = (): Order[] => {
        try {
            const localStorageContent = localStorage.getItem(ORDERS_LOCAL_STORAGE_NAME);
            const orders = JSON.parse(localStorageContent ?? '') as Order[];

            return orders;
        } catch {
            return [];
        }
    }

    const setOrders = (orderList: Order[]) => {
        localStorage.setItem(ORDERS_LOCAL_STORAGE_NAME, JSON.stringify(orderList));
    }

    const saveOrder = async (order: Order) => {
        await delay(1500);

        const currentOrders = getOrders();

        setOrders([...currentOrders, order]);
    }

    const removeOrder = (orderId: string): Order[] => {
        const filteredOrders = getOrders().filter(({ id }) => id !== orderId);

        setOrders(filteredOrders);

        return filteredOrders;
    }

    return {
        getOrders,
        saveOrder,
        removeOrder,
    }
}
