import dayjs from 'dayjs';
import { DATE } from 'shared/const/dateFormat';
import type { Option } from 'shared/types/option';
import { useDates } from 'pages/RegistrationPage/model/swr/useDates';

export const useDateOptions = (cityId?: string): Option[] => {
    const { data: dates } = useDates(cityId);

    if (dates) {
        return Object.keys(dates).map((date) => ({
            value: date,
            label: dayjs(date).format(DATE),
        }))
    }

    return [];
}
