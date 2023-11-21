import { forwardRef, InputHTMLAttributes } from 'react';
import { BaseInput, Wrapper, Error } from './styles';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> & {
    errorMessage?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
    const { errorMessage, ...restProps } = props;
    const hasError = !!errorMessage;

    return (
        <Wrapper>
            <BaseInput ref={forwardedRef} hasError={hasError} {...restProps} />
            {hasError && <Error>{errorMessage}</Error>}
        </Wrapper>
    );
});
