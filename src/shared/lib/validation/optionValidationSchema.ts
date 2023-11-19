import { object, string } from 'zod';

export const optionValidationSchema = (requiredError: string) =>
    object(
        {
            value: string(),
            label: string(),
        },
        {
            required_error: requiredError,
        }
    );
