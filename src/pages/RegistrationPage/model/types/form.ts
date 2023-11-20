import type { UseFormReturn } from 'react-hook-form';
import type { Option } from 'shared/types/option';

export interface RegistrationForm {
    city?: Option;
    date?: Option;
    time?: Option;
    phone?: string;
    name?: string;
}

export type RegistrationFormSubmitHandler = (
    data: RegistrationForm,
    helpers: Pick<UseFormReturn<RegistrationForm>, 'reset'>,
) => Promise<void>
