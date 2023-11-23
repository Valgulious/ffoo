import { Controller } from 'react-hook-form';
import type { Control, FieldValues, FieldPath } from 'react-hook-form';
import {
    Select as BaseSelect,
    SelectProps as BaseSelectProps,
    SelectOption,
} from 'shared/ui/inputs/Select';

export type SelectProps<
    FormValues extends FieldValues = FieldValues,
    Option = SelectOption,
    IsMulti extends boolean = false,
> = BaseSelectProps<Option, IsMulti> & {
    name: FieldPath<FormValues>;
    control: Control<FormValues>;
};

export const Select = <
    FormValues extends FieldValues = FieldValues,
    Option = SelectOption,
    IsMulti extends boolean = false,
>(
    props: SelectProps<FormValues, Option, IsMulti>,
) => {
    const { name, control, ...selectProps } = props;

    return (
        <Controller
            name={name}
            control={control}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            render={({ field }) => <BaseSelect {...field} {...selectProps} />}
        />
    );
};
