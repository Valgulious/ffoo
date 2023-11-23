import { useEffect, useState } from 'react';
import { delay } from 'shared/lib/helpers/delay';
import { ORDERS_LOCAL_STORAGE_NAME } from 'shared/const/localStorage';
import type { Order } from 'entities/Order';

export const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const getOrders = (): Order[] => {
        const localStorageContent = localStorage.getItem(ORDERS_LOCAL_STORAGE_NAME);

        if (localStorageContent) {
            const localStorageOrders = JSON.parse(localStorageContent ?? '') as Order[];

            return localStorageOrders;
        }

        return [];
    };

    const saveOrders = (orderList: Order[]) => {
        localStorage.setItem(ORDERS_LOCAL_STORAGE_NAME, JSON.stringify(orderList));

        setOrders(orderList);
    };

    const saveOrder = async (order: Order) => {
        await delay(1500);

        const currentOrders = getOrders();

        saveOrders([...currentOrders, order]);
    };

    const removeOrder = (orderId: string) => {
        const filteredOrders = getOrders().filter(({ id }) => id !== orderId);

        saveOrders(filteredOrders);
    };

    useEffect(() => {
        setOrders(getOrders);
    }, []);

    return {
        orders,
        getOrders,
        saveOrder,
        removeOrder,
    };
};
