import { HTMLInputTypeAttribute } from 'react';
import { PatternFormat, PatternFormatProps as BasePatternFormatProps } from 'react-number-format';
import { Controller } from 'react-hook-form';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Input, InputProps } from 'shared/ui/inputs/Input';

type AvailableInputProps = Omit<InputProps, 'defaultValue' | 'value'> & {
    type?: Extract<HTMLInputTypeAttribute, 'password' | 'tel' | 'text'>;
};

export type PatternFormatInputProps<FormValues extends FieldValues = FieldValues> = BasePatternFormatProps & {
    inputProps?: AvailableInputProps;
    name: FieldPath<FormValues>;
    control: Control<FormValues>;
};

export const PatternFormatInput = <FormValues extends FieldValues = FieldValues>(props: PatternFormatInputProps<FormValues>) => {
        const { inputProps, name, control, ...restProps } = props;

        return (
            <Controller
                name={name}
                control={control}
                render={({ field: { ref, ...restFieldProps } }) => (
                    <PatternFormat
                        displayType="input"
                        getInputRef={ref}
                        customInput={Input}
                        {...restFieldProps}
                        {...inputProps}
                        {...restProps}
                    />
                )}
            />
        );
    }
