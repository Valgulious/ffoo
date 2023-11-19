import { object, ZodSchema } from 'zod';
import { cityField, dateField, timeField } from 'shared/lib/validation/messages';
import { nameValidationSchema } from 'shared/lib/validation/nameValidationSchema';
import { phoneValidationSchema } from 'shared/lib/validation/phoneValidationSchema';
import { optionValidationSchema } from 'shared/lib/validation/optionValidationSchema';
import type { RegistrationForm } from 'pages/RegistrationPage/model/types/form.ts';

export const registrationFormValidationSchema: ZodSchema<RegistrationForm> = object({
    phone: phoneValidationSchema,
    name: nameValidationSchema,
    city: optionValidationSchema(cityField),
    date: optionValidationSchema(dateField),
    time: optionValidationSchema(timeField),
});
