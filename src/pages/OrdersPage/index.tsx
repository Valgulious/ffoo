import { FC, useState } from 'react';
import { useOrder } from 'features/order/service/useOrder';
import { OrderRow } from './ui/OrderRow';
import {
    Row,
    Table,
    HeadCell,
    TBody,
    THead,
} from './styles';
import { Order } from 'entities/Order';

export const OrdersPage: FC = () => {
    const { getOrders, removeOrder: removeOrderFromLocalStorage } = useOrder();
    const [orders, setOrders] = useState<Order[]>(getOrders());

    const removeOrder = (orderId: string) => {
        const filteredOrders = removeOrderFromLocalStorage(orderId);

        setOrders(filteredOrders);
    }

    return (
        <Table>
            <THead>
                <Row>
                    <HeadCell>
                        Город
                    </HeadCell>
                    <HeadCell>
                        Дата
                    </HeadCell>
                    <HeadCell>
                        Время
                    </HeadCell>
                    <HeadCell>
                        Имя
                    </HeadCell>
                    <HeadCell>
                        Телефон
                    </HeadCell>
                    <HeadCell />
                </Row>
            </THead>
            <TBody>
                {orders.map((order) => (
                    <OrderRow key={order.id} order={order} removeOrder={removeOrder} />
                ))}
            </TBody>
        </Table>
    );
};
