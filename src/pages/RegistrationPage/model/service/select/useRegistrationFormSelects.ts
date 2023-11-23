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
    const isTimeSelectDisabled = !date;

    useEffect(() => {
        setValue(
            'city',
            defaultCityOption,
        );
    }, [cityOptions.length]);

    useEffect(() => {
        setValue('date', undefined);
    }, [city]);

    useEffect(() => {
        setValue('time', undefined);
    }, [date]);

    return {
        city,
        cityOptions,
        dateOptions,
        timeOptions,
        isTimeSelectDisabled,
    };
};
