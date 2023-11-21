import { AnchorHTMLAttributes, FC } from 'react';
import { Wrapper } from './styles';

type LinkVariant = 'external' | 'naked';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    linkVariant?: LinkVariant;
};

export const Link: FC<Props> = (props) => {
    const { linkVariant = 'naked', children, ...restProps } = props;

    if (linkVariant === 'external') {
        return (
            <Wrapper rel="noopener noreferrer" target="_blank" {...restProps}>
                {children}
            </Wrapper>
        )
    }

    return (
        <Wrapper {...restProps}>
            {children}
        </Wrapper>
    );
};
