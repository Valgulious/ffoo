import { useDates } from 'pages/RegistrationPage/model/swr/useDates.ts';
import { Option } from 'shared/types/option.ts';

export const useTimeOptions = (cityId?: string, date?: string): Option[] => {
    const { data: dates } = useDates(cityId);

    if (!date) {
        return [];
    }

    const times = dates?.[date];

    if (times) {
        return times.map(({ date, begin, end }) => ({
            value: date,
            label: `${begin}-${end}`,
        }));
    }

    return [];
}
