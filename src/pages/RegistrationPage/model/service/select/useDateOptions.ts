import dayjs from 'dayjs';
import { DATE } from 'shared/const/dateFormat';
import type { Option } from 'shared/types/option';
import { useDateList } from 'pages/RegistrationPage/model/swr/useDateList.ts';

export const useDateOptions = (cityId?: string): Option[] => {
    const { data: dates } = useDateList(cityId);

    if (dates) {
        return Object.keys(dates).map((date) => ({
            value: date,
            label: dayjs(date).format(DATE),
        }));
    }

    return [];
};
