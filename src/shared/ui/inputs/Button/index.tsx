import { ButtonHTMLAttributes, FC } from 'react';
import { Wrapper } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
    const { children, ...restProps } = props;

    return (
        <Wrapper type="button" {...restProps}>
            {children}
        </Wrapper>
    );
};
