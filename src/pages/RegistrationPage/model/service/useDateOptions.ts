import { useDates } from 'pages/RegistrationPage/model/swr/useDates.ts';
import { Option } from 'shared/types/option.ts';

export const useDateOptions = (cityId?: string): Option[] => {
    const { data: dates } = useDates(cityId);

    if (dates) {
        return Object.keys(dates).map((date) => ({
            value: date,
            label: date,
        }))
    }

    return [];
}
