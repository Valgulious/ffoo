import { useEffect } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { RegistrationForm } from 'pages/RegistrationPage/model/types/form';
import { useCityOptions } from './useCityOptions';
import { useDateOptions } from './useDateOptions';
import { useTimeOptions } from './useTimeOptions';

type Args = Pick<UseFormReturn<RegistrationForm>, 'watch' | 'setValue'>;

export const useRegistrationFormSelects = (args: Args) => {
    const { watch, setValue } = args;
    const [city, date] = watch(['city', 'date']);
    const { options: cityOptions, defaultOption: defaultCityOption } = useCityOptions();
    const dateOptions = useDateOptions(city?.value);
    const timeOptions = useTimeOptions(city?.value, date?.value);

    useEffect(() => {
        setValue(
            'city',
            defaultCityOption,
        );
    }, [cityOptions.length]);

    return {
        city,
        cityOptions,
        dateOptions,
        timeOptions,
    };
};
