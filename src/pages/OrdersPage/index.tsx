import { FC } from 'react';
import { useOrder } from 'features/order/service/useOrder';
import { OrderRow } from './ui/OrderRow';
import {
    Row,
    Table,
    HeadCell,
    TBody,
    THead,
} from './styles';

export const OrdersPage: FC = () => {
    const { removeOrder, orders, } = useOrder();

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
