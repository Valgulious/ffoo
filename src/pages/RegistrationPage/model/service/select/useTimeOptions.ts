import { useDateList } from 'pages/RegistrationPage/model/swr/useDateList.ts';
import type { Option } from 'shared/types/option';

export const useTimeOptions = (cityId?: string, selectedDate?: string): Option[] => {
    const { data: dates } = useDateList(cityId);

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
