import { FC } from 'react';
import { NumericFormat } from 'react-number-format';

type Props = {
    price: number;
}

export const Price: FC<Props> = (props) => {
    const { price } = props;

    return (
        <>
            <NumericFormat
                value={price}
                thousandSeparator=" "
                displayType="text"
            />
            &nbsp;₽
        </>
    );
};
