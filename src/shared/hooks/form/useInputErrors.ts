import { get } from 'react-hook-form';
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form';
import { InputProps } from 'shared/ui/inputs/Input';

export function useInputErrors<T extends FieldValues>(
    errors: FieldErrors<T>,
): (field: FieldPath<T>) => Partial<Pick<InputProps, 'errorMessage'>> {
    return (field) => {
        const errorMessage = get(errors, field.toString())?.message;

        if (typeof errorMessage === 'string') {
            return {
                errorMessage,
            };
        }

        return {};
    };
}
