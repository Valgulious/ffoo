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
    const cityOptions = useCityOptions();
    const dateOptions = useDateOptions(city?.value);
    const timeOptions = useTimeOptions(city?.value, date?.value);

    useEffect(() => {
        setValue('city', cityOptions.find(({ label }) => label === 'Владивосток'))
    }, [cityOptions.length]);

    useEffect(() => {
        if (dateOptions.length > 0) {
            setValue('date', dateOptions[0]);
        }
    }, [dateOptions.length, city?.value]);

    useEffect(() => {
        if (timeOptions.length > 0) {
            setValue('time', timeOptions[0]);
        }
    }, [timeOptions.length, date?.value]);

    return {
        city,
        cityOptions,
        dateOptions,
        timeOptions,
    }
}
