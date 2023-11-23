import { FC, HTMLAttributes } from 'react';
import { Wrapper, Spinner } from './styles';

type Props = HTMLAttributes<HTMLDivElement> & {
    width?: number;
}

export const Loader: FC<Props> = (props) => {
    const { width = 40, ...restProps } = props;

    return (
        <Wrapper {...restProps}>
            <Spinner width={width} />
        </Wrapper>
    );
};
