import { useEffect, useState } from 'react';
import type { Order } from 'entities/Order';
import { delay } from 'shared/lib/helpers/delay';
import { ORDERS_LOCAL_STORAGE_NAME } from 'shared/const/localStorage';

export const useOrder = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        setOrders(getOrders)
    }, []);

    const getOrders = (): Order[] => {
        try {
            const localStorageContent = localStorage.getItem(ORDERS_LOCAL_STORAGE_NAME);
            const localStorageOrders = JSON.parse(localStorageContent ?? '') as Order[];

            return localStorageOrders;
        } catch {
            return [];
        }
    }

    const saveOrders = (orderList: Order[]) => {
        setOrders(orderList);
        localStorage.setItem(ORDERS_LOCAL_STORAGE_NAME, JSON.stringify(orderList));
    }

    const saveOrder = async (order: Order) => {
        await delay(1500);

        const currentOrders = getOrders();

        setOrders([...currentOrders, order]);
    }

    const removeOrder = (orderId: string) => {
        const filteredOrders = getOrders().filter(({ id }) => id !== orderId);

        saveOrders(filteredOrders);
    }

    return {
        orders,
        getOrders,
        saveOrder,
        removeOrder,
    }
}
