import { FC } from 'react';
import { PatternFormat } from 'react-number-format';

type Props = {
    phone: string;
}

export const Phone: FC<Props> = (props) => {
    const { phone } = props;

    return (
        <PatternFormat
            format="+# (###) ###-##-##"
            value={phone}
            displayType="text"
            valueIsNumericString
        />
    );
};
