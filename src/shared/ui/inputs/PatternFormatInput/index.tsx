import { forwardRef, HTMLInputTypeAttribute } from 'react';
import { PatternFormat, PatternFormatProps as BasePatternFormatProps } from 'react-number-format';
import { Input, InputProps } from 'shared/ui/inputs/Input';

type AvailableInputProps = Omit<InputProps, 'defaultValue' | 'value'> & {
    type?: Extract<HTMLInputTypeAttribute, 'password' | 'tel' | 'text'>;
};

export type PatternFormatInputProps = BasePatternFormatProps & {
    inputProps?: AvailableInputProps;
};

export const PatternFormatInput = forwardRef<HTMLInputElement, PatternFormatInputProps>(
    (props, forwardedRef) => {
        const { inputProps, ...restProps } = props;

        return (
            <PatternFormat
                displayType="input"
                getInputRef={forwardedRef}
                customInput={Input}
                {...inputProps}
                {...restProps}
            />
        );
    },
);
