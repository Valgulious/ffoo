import dayjs from 'dayjs';
import { useEffect } from 'react';
import { DATE } from 'shared/const/dateFormat';
import type { Option } from 'shared/types/option';
import { useDateList } from 'pages/RegistrationPage/model/swr/useDateList';
import { useDateStore } from 'pages/RegistrationPage/model/store/useDateStore';

export const useDateOptions = (cityId?: string): Option[] => {
    const { data: dates, isLoading } = useDateList(cityId);
    const { setIsLoading } = useDateStore();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading]);

    if (dates) {
        return Object.keys(dates).map((date) => ({
            value: date,
            label: dayjs(date).format(DATE),
        }));
    }

    return [];
};
