import { useDates } from 'pages/RegistrationPage/model/swr/useDates';
import type { Option } from 'shared/types/option';

export const useTimeOptions = (cityId?: string, selectedDate?: string): Option[] => {
    const { data: dates } = useDates(cityId);

    if (!selectedDate) {
        return [];
    }

    const times = dates?.[selectedDate];

    if (times) {
        return times.map(({ date, begin, end }) => ({
            value: date,
            label: `${begin}-${end}`,
        }));
    }

    return [];
};
