import { string } from 'zod';
import { phoneField } from 'shared/lib/validation/messages';
import { sanitizePhone } from 'shared/lib/helpers/sanitizePhone';

const REG_EXP = /(^\+7\d{10}$)|(^$)/;

export const phoneValidationSchema =
    string({
        required_error: phoneField,
        invalid_type_error: phoneField,
    })
        .min(1, phoneField)
        .transform(sanitizePhone)
        .refine((value) => REG_EXP.test(value), { message: phoneField });
