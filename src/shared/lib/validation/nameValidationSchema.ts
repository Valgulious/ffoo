import { string } from 'zod';
import { nameField } from 'shared/lib/validation/messages';

export const nameValidationSchema = string({
    required_error: nameField,
}).min(1, nameField);
