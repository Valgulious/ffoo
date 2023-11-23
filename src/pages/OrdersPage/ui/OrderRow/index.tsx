import { FC, MouseEventHandler } from 'react';
import dayjs from 'dayjs';
import { DATE } from 'shared/const/dateFormat';
import TrashIcon from 'shared/assets/icons/trash.svg?react';
import { Phone } from 'shared/ui/format/Phone';
import type { Order } from 'entities/Order';
import { Row, Cell, Button } from './styles';

type Props = {
    order: Order;
    removeOrder: (ordersId: string) => void;
};

export const OrderRow: FC<Props> = (props) => {
    const { order, removeOrder } = props;
    const { id, date, name, city, time, phone } = order;

    const handleRemoveButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
        removeOrder(id);
    };

    return (
        <Row>
            <Cell>{city}</Cell>
            <Cell>{dayjs(date).format(DATE)}</Cell>
            <Cell>{time}</Cell>
            <Cell>{name}</Cell>
            <Cell>
                <Phone phone={phone} />
            </Cell>
            <Cell>
                <Button onClick={handleRemoveButtonClick}>
                    <TrashIcon width={24} />
                </Button>
            </Cell>
        </Row>
    );
};
